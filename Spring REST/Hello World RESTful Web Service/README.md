# Hello World RESTful Web Service

This project implements a simple GET REST web service returning "Hello World!!" and examines the HTTP response headers received.

---

## 1. REST Controller Class (`HelloController.java`)
The class is placed inside `com.cognizant.springlearn.controller`:

```java
package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.info("Start sayHello() method execution...");
        String response = "Hello World!!";
        LOGGER.info("End sayHello() method execution with response: {}", response);
        return response;
    }
}
```

---

## 2. Startup & Request Execution Logs
When running the service using `mvn spring-boot:run` and hitting `http://localhost:8083/hello`, the application successfully logs:

```text
2026-07-06T11:50:52.281+05:30  INFO 25640 --- [           main] c.c.springlearn.SpringLearnApplication   : Started SpringLearnApplication in 3.651 seconds (process running for 4.369)
2026-07-06T11:50:52.287+05:30  INFO 25640 --- [           main] c.c.springlearn.SpringLearnApplication   : SpringLearnApplication started successfully.
2026-07-06T11:54:37.505+05:30  INFO 25640 --- [nio-8083-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2026-07-06T11:54:37.553+05:30  INFO 25640 --- [nio-8083-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2026-07-06T11:54:37.821+05:30  INFO 25640 --- [nio-8083-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 266 ms
2026-07-06T11:54:38.263+05:30  INFO 25640 --- [nio-8083-exec-1] c.c.s.controller.HelloController         : Start sayHello() method execution...
2026-07-06T11:54:38.263+05:30  INFO 25640 --- [nio-8083-exec-1] c.c.s.controller.HelloController         : End sayHello() method execution with response: Hello World!!
```

---

## 3. HTTP Header Analysis (Chrome Developer Tools & Postman)

When making a GET request to `http://localhost:8083/hello`, the following HTTP response headers are received:

```text
HTTP/1.1 200 OK
Content-Type: text/plain;charset=UTF-8
Content-Length: 13
Date: Mon, 06 Jul 2026 06:24:38 GMT
Keep-Alive: timeout=60
Connection: keep-alive
```

### Detailed Breakdown of Headers:
1. **`HTTP/1.1 200 OK`**:
   - **`HTTP/1.1`** is the protocol version.
   - **`200 OK`** is the HTTP status code indicating that the server successfully processed the request.
2. **`Content-Type: text/plain;charset=UTF-8`**:
   - Informs the client browser/tool that the format of the response body is raw plain text (`text/plain`).
   - The encoding character set is specified as `UTF-8` to ensure correct rendering of special characters.
3. **`Content-Length: 13`**:
   - Specifies the size of the payload body in bytes. `"Hello World!!"` contains exactly 13 characters, translating to 13 bytes.
4. **`Date: Mon, 06 Jul 2026 06:24:38 GMT`**:
   - Indicates the exact date and time (in Greenwich Mean Time) when the server generated and dispatched the response.
5. **`Connection: keep-alive`**:
   - Tells the client that the TCP socket connection should be kept open to receive further HTTP requests/responses, avoiding connection handshake overhead.
6. **`Keep-Alive: timeout=60`**:
   - Tells the client that the server will keep the connection idle for a maximum of 60 seconds before closing it.
  
## ScreenShot
---
<img width="1395" height="320" alt="image" src="https://github.com/user-attachments/assets/10c6f379-643c-4e19-9f0e-383f423c0cf0" />

---
