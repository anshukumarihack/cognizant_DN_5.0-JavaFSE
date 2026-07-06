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
