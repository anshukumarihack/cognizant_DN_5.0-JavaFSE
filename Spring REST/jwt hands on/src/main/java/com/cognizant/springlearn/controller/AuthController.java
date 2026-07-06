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
            // Decode basic auth credentials
            String base64Credentials = authHeader.substring(6);
            byte[] decoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decoded, StandardCharsets.UTF_8);
            
            String[] values = credentials.split(":", 2);
            if (values.length != 2) {
                LOGGER.error("Invalid credentials format");
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Unauthorized: Invalid credentials format");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
            }
            
            String username = values[0];
            String password = values[1];

            LOGGER.info("Attempting to authenticate user: {}", username);

            // Simple validation matching instructions (user:pwd)
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
