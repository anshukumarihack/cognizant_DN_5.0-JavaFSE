# REST - Country Web Service

This project exposes a GET REST web service returning configured India country details in JSON format, utilizing Spring XML configuration and Spring Web Framework.

---

## 1. REST Controller Class (`CountryController.java`)
The class is placed inside package `com.cognizant.springlearn.controller`:

```java
package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.Country;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        LOGGER.info("Start getCountryIndia() method execution...");
        
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        
        LOGGER.info("End getCountryIndia() method execution. Retrieved Country: {}", country);
        return country;
    }
}
```

---

## 2. SME Walkthrough Concepts

### What happens in the controller method?
1. The client sends a `GET` request to `http://localhost:8083/country`.
2. The Spring `DispatcherServlet` routes the request to `getCountryIndia()` inside `CountryController`.
3. The method instantiates a new `ClassPathXmlApplicationContext` which reads `country.xml` from the classpath.
4. It retrieves the configured singleton `country` bean (which was populated with properties `code=IN` and `name=India`).
5. The method returns the `Country` Java object.

### How is the Java Bean converted into a JSON response?
1. Since the controller is annotated with **`@RestController`** (which implicitly adds `@ResponseBody` to all handler methods), Spring MVC knows the return value must be written directly to the HTTP response body instead of resolving to a view template.
2. Spring MVC iterates through registered `HttpMessageConverter`s to serialize the return object.
3. Because the method returns a POJO (`Country`) and Jackson is on the classpath (default in `spring-boot-starter-web`), Spring MVC selects **`MappingJackson2HttpMessageConverter`**.
4. Jackson uses reflection/introspection on the getter methods (`getCode()`, `getName()`) to serialize the object properties into a JSON string:
   ```json
   {"code":"IN","name":"India"}
   ```
5. The converter writes this JSON string to the response body and sets the `Content-Type` header to `application/json`.

---

## 3. HTTP Header Analysis (Chrome Developer Tools & Postman)

Making a GET request to `http://localhost:8083/country` yields the following HTTP headers:

```text
HTTP/1.1 200 OK
Content-Type: application/json
Transfer-Encoding: chunked
Date: Mon, 06 Jul 2026 06:34:07 GMT
Keep-Alive: timeout=60
Connection: keep-alive
```

### Detailed Breakdown of Headers:
1. **`Content-Type: application/json`**:
   - Informs the client browser/tool that the response body is formatted as a JSON object (`application/json`), as serialized by Jackson.
2. **`Transfer-Encoding: chunked`**:
   - Tells the client that the response data is sent in a series of chunks instead of one single block. This allows the server to start streaming the response immediately without calculating the final `Content-Length` beforehand.
3. **`Date`**: The server generation timestamp.
4. **`Connection: keep-alive`**: Keeps the underlying TCP socket open for subsequent requests.

## ScreenShot

---

<img width="412" height="172" alt="image" src="https://github.com/user-attachments/assets/c2531e03-195e-4f56-85f4-2bb506104139" />

<img width="1396" height="243" alt="image" src="https://github.com/user-attachments/assets/7617b80c-26f5-4863-9474-1fa9988bc85a" />

---
