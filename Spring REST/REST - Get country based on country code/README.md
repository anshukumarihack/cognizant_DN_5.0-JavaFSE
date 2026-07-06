# REST - Get Country Based on Country Code

This project implements a GET REST web service that retrieves a specific country from the XML configuration using its country code.

---

## 1. REST Controller Class (`CountryController.java`)
Exposes both `/countries/{code}` and `/country/{code}` mappings:

```java
package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping({"/countries/{code}", "/country/{code}"})
    public Country getCountry(@PathVariable("code") String code) {
        LOGGER.info("Start getCountry() controller method execution for code: {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("End getCountry() controller method execution. Country: {}", country);
        return country;
    }
}
```

---

## 2. Service Class (`CountryService.java`)
Loads the XML country list and queries the code using a Java stream:

```java
package com.cognizant.springlearn.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.info("Start getCountry(String code) service method execution for code: {}", code);
        
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        @SuppressWarnings("unchecked")
        List<Country> countries = context.getBean("countryList", List.class);
        
        Country foundCountry = countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> {
                    LOGGER.error("Country not found exception thrown for code: {}", code);
                    return new CountryNotFoundException("Country not found for code: " + code);
                });
        
        LOGGER.info("End getCountry(String code) service method execution. Found: {}", foundCountry);
        return foundCountry;
    }
}
```

---

## 3. Exception Handling Class (`CountryNotFoundException.java`)
Custom runtime exception configured with `@ResponseStatus` to automatically return an HTTP 404 response status code:

```java
package com.cognizant.springlearn.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Country not found")
public class CountryNotFoundException extends RuntimeException {
    public CountryNotFoundException(String message) {
        super(message);
    }
}
```

---

## 4. API Request Verification Outputs

### Case-Insensitive Lowercase GET: `http://localhost:8083/countries/in`
- **Response**:
  ```json
  {"code":"IN","name":"India"}
  ```
- **Console Log**:
  ```text
  INFO 12216 --- [nio-8084-exec-1] c.c.s.controller.CountryController       : Start getCountry() controller method execution for code: in
  INFO 12216 --- [nio-8084-exec-1] c.c.springlearn.service.CountryService   : Start getCountry(String code) service method execution for code: in
  INFO 12216 --- [nio-8084-exec-1] c.c.springlearn.service.CountryService   : End getCountry(String code) service method execution. Found: Country [code=IN, name=India]
  INFO 12216 --- [nio-8084-exec-1] c.c.s.controller.CountryController       : End getCountry() controller method execution. Country: Country [code=IN, name=India]
  ```

### Case-Insensitive Uppercase GET: `http://localhost:8083/countries/IN`
- **Response**:
  ```json
  {"code":"IN","name":"India"}
  ```
- **Console Log**:
  ```text
  INFO 12216 --- [nio-8084-exec-2] c.c.s.controller.CountryController       : Start getCountry() controller method execution for code: IN
  INFO 12216 --- [nio-8084-exec-2] c.c.springlearn.service.CountryService   : Start getCountry(String code) service method execution for code: IN
  INFO 12216 --- [nio-8084-exec-2] c.c.springlearn.service.CountryService   : End getCountry(String code) service method execution. Found: Country [code=IN, name=India]
  INFO 12216 --- [nio-8084-exec-2] c.c.s.controller.CountryController       : End getCountry() controller method execution. Country: Country [code=IN, name=India]
  ```

### Country Code Not Found GET: `http://localhost:8083/countries/xx`
- **HTTP Status**: `404 Not Found`
- **JSON Error Payload**:
  ```json
  {"timestamp":"2026-07-06T06:43:57.624+00:00","status":404,"error":"Not Found","path":"/countries/xx"}
  ```
- **Console Log**:
  ```text
  INFO 12216 --- [nio-8084-exec-4] c.c.s.controller.CountryController       : Start getCountry() controller method execution for code: xx
  INFO 12216 --- [nio-8084-exec-4] c.c.springlearn.service.CountryService   : Start getCountry(String code) service method execution for code: xx
  ERROR 12216 --- [nio-8084-exec-4] c.c.springlearn.service.CountryService   : Country not found exception thrown for code: xx
  ```

## ScreenShot

---
<img width="1775" height="517" alt="image" src="https://github.com/user-attachments/assets/4b70ec21-6ce6-4984-b17b-e392daac1f06" />

---
