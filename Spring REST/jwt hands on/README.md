# JWT Hands On: Token Authentication Service

This project implements a GET authentication REST service that intercepts HTTP Basic credentials, validates them, and generates a signed HMAC-SHA256 JWT token returned as JSON response payload.

---

## 1. Core Implementation Components

### Security Configuration (`SecurityConfig.java`)
Configured in package `com.cognizant.springlearn.security` to disable CSRF and permit all requests to `/authenticate`:

```java
package com.cognizant.springlearn.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/authenticate").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }
}
```

### Authentication Controller (`AuthController.java`)
Extracts, decodes the base64 basic authentication header, checks credentials (`user` and `pwd`), and responds with the token:

```java
package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.security.JwtUtil;

@RestController
public class AuthController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        LOGGER.info("Start authenticate() method execution...");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            LOGGER.error("Missing or invalid Authorization header");
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Unauthorized: Missing Basic credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }

        try {
            String base64Credentials = authHeader.substring(6);
            byte[] decoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decoded, StandardCharsets.UTF_8);
            
            String[] values = credentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            LOGGER.info("Attempting to authenticate user: {}", username);

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = JwtUtil.generateToken(username);
                LOGGER.info("Authentication successful for user: {}. Token generated.", username);
                
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                
                LOGGER.info("End authenticate() method execution successfully.");
                return ResponseEntity.ok(response);
            } else {
                LOGGER.error("Invalid username or password");
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Unauthorized: Invalid username or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
            }
        } catch (Exception e) {
            LOGGER.error("Error decoding authentication header", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Unauthorized: Decoding error");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
}
```

### Custom Cryptographic JWT Token Helper (`JwtUtil.java`)
Signs standard base64url HMAC-SHA256 token components:

```java
package com.cognizant.springlearn.security;

import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class JwtUtil {

    private static final String SECRET_KEY = "mySuperSecretKeyForJWTHandsOnCognizant";

    public static String generateToken(String username) {
        try {
            // Header
            String header = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
            String encodedHeader = Base64.getUrlEncoder().withoutPadding().encodeToString(header.getBytes(StandardCharsets.UTF_8));

            // Payload (sub, iat, exp)
            long now = System.currentTimeMillis() / 1000L;
            long exp = now + 3600; // 1 hour expiration
            String payload = String.format("{\"sub\":\"%s\",\"iat\":%d,\"exp\":%d}", username, now, exp);
            String encodedPayload = Base64.getUrlEncoder().withoutPadding().encodeToString(payload.getBytes(StandardCharsets.UTF_8));

            // Signature
            String signatureInput = encodedHeader + "." + encodedPayload;
            Mac sha256HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            sha256HMAC.init(secretKeySpec);
            byte[] signatureBytes = sha256HMAC.doFinal(signatureInput.getBytes(StandardCharsets.UTF_8));
            String encodedSignature = Base64.getUrlEncoder().withoutPadding().encodeToString(signatureBytes);

            return signatureInput + "." + encodedSignature;
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            throw new RuntimeException("Error generating JWT token", e);
        }
    }
}
```

---

## 2. API Request Execution & Logging Outputs

### Request Example (CURL)
```powershell
curl -s -u user:pwd http://localhost:8090/authenticate
```
### Response Output Received
```json
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzMzM4NTQ2LCJleHAiOjE3ODMzNDIxNDZ9._5FxzhbiMJWrtKZWvCh99kkmvusfGswXDGiAIWLQlwo"}
```

### Application Execution Logs
```text
INFO 3808 --- [nio-8090-exec-1] c.c.s.controller.AuthController          : Start authenticate() method execution...
INFO 3808 --- [nio-8090-exec-1] c.c.s.controller.AuthController          : Attempting to authenticate user: user
INFO 3808 --- [nio-8090-exec-1] c.c.s.controller.AuthController          : Authentication successful for user: user. Token generated.
INFO 3808 --- [nio-8090-exec-1] c.c.s.controller.AuthController          : End authenticate() method execution successfully.
```
