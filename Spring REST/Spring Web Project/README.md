# Spring Web Project: spring-learn

This project demonstrates the creation and setup of a standard Spring Web project using Maven and Spring Boot.

---

## Directory Structure Overview

A standard Maven-based Spring Boot project organizes its files into the following folders:

1. **`src/main/java`**:
   - Contains the core application code and logic (controllers, services, models, repositories, and configurations).
   - Our main class `SpringLearnApplication.java` is placed here under the base package `com.cognizant.springlearn`.

2. **`src/main/resources`**:
   - Holds non-Java resources like database configurations (`application.properties` or `application.yml`), static web files (HTML/CSS/JS), and templates (Thymeleaf/Freemarker).
   - Contains our [`application.properties`](file:///d:/Cognizant%20DN%205.0/cognizant_DN_5.0-JavaFSE/Spring%20REST/Spring%20Web%20Project/src/main/resources/application.properties) configuring server port and logging context.

3. **`src/test/java`**:
   - Houses code written to test the application's functionality (unit tests, integration tests, and mock assertions).
   - Includes [`SpringLearnApplicationTests.java`](file:///d:/Cognizant%20DN%205.0/cognizant_DN_5.0-JavaFSE/Spring%20REST/Spring%20Web%20Project/src/test/java/com/cognizant/springlearn/SpringLearnApplicationTests.java) which verifies that the application context boots up successfully.

---

## Application Code Walkthrough

### 1. Main Application Class (`SpringLearnApplication.java`)
```java
package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("Starting SpringLearnApplication main() method...");
        SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("SpringLearnApplication main() method successfully executed and application started.");
    }
}
```

#### Detailed walkthrough of the `main()` method:
1. `LOGGER.info("Starting SpringLearnApplication main() method...")` logs the initial entry into the method.
2. `SpringApplication.run(SpringLearnApplication.class, args)` starts the Spring Boot framework bootstrap process:
   - Configures the default Spring configurations.
   - Starts the embedded Web Server (Tomcat) on the port configured in `application.properties` (port `8081`).
   - Scans components, initializes the Spring `ApplicationContext`, and creates beans.
3. Once the context is initialized, the final success logger triggers.

---

### 2. Purpose of `@SpringBootApplication` Annotation
The `@SpringBootApplication` annotation is a convenience annotation that combines three essential annotations into a single declaration:

1. **`@SpringBootConfiguration`**: 
   - A specialized form of `@Configuration` that tags the class as a source of bean definitions for the application context.
2. **`@EnableAutoConfiguration`**:
   - Directs Spring Boot to automatically configure beans based on dependencies present on the classpath. E.g., since `spring-boot-starter-web` is on the classpath, it automatically configures Tomcat and Spring MVC defaults.
3. **`@ComponentScan`**:
   - Directs Spring to scan the current package (`com.cognizant.springlearn`) and its sub-packages for stereotype components (like `@Component`, `@Service`, `@Repository`, `@RestController`).

---

## Maven Configuration (`pom.xml`)

### Walkthrough of XML Configuration
- **Parent Pom**: Inherits defaults from `spring-boot-starter-parent` version `3.5.16` (sets up dependency management versions, default compiler release, and resource filtering).
- **Core Dependencies**:
  - `spring-boot-starter-web`: Configures Tomcat servlet container and Spring Web MVC.
  - `spring-boot-devtools`: Enables fast hot-reloading and browser refresh capabilities during active development.
  - `spring-boot-starter-test`: Imports testing libraries including JUnit 5, AssertJ, Mockito, and Spring Test context.
- **Build Plugin**: `spring-boot-maven-plugin` packages the application as an executable "fat JAR" containing all required dependencies.

### Dependency Hierarchy (Tree Output)
Below is the output of `mvn dependency:tree` showing the complete hierarchy:

```text
com.cognizant:spring-learn:jar:0.0.1-SNAPSHOT
+- org.springframework.boot:spring-boot-starter-web:jar:3.5.16:compile
|  +- org.springframework.boot:spring-boot-starter:jar:3.5.16:compile
|  |  +- org.springframework.boot:spring-boot-starter-logging:jar:3.5.16:compile
|  |  |  +- ch.qos.logback:logback-classic:jar:1.5.34:compile
|  |  |  |  \- ch.qos.logback:logback-core:jar:1.5.34:compile
|  |  |  +- org.apache.logging.log4j:log4j-to-slf4j:jar:2.24.3:compile
|  |  |  |  \- org.apache.logging.log4j:log4j-api:jar:2.24.3:compile
|  |  |  \- org.slf4j:jul-to-slf4j:jar:2.0.18:compile
|  |  +- jakarta.annotation:jakarta.annotation-api:jar:2.1.1:compile
|  |  \- org.yaml:snakeyaml:jar:2.4:compile
|  +- org.springframework.boot:spring-boot-starter-json:jar:3.5.16:compile
|  |  +- com.fasterxml.jackson.core:jackson-databind:jar:2.21.4:compile
|  |  |  +- com.fasterxml.jackson.core:jackson-annotations:jar:2.21:compile
|  |  |  \- com.fasterxml.jackson.core:jackson-core:jar:2.21.4:compile
|  |  +- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:jar:2.21.4:compile
|  |  +- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:jar:2.21.4:compile
|  |  \- com.fasterxml.jackson.module:jackson-module-parameter-names:jar:2.21.4:compile
|  +- org.springframework.boot:spring-boot-starter-tomcat:jar:3.5.16:compile
|  |  +- org.apache.tomcat.embed:tomcat-embed-core:jar:10.1.55:compile
|  |  +- org.apache.tomcat.embed:tomcat-embed-el:jar:10.1.55:compile
|  |  \- org.apache.tomcat.embed:tomcat-embed-websocket:jar:10.1.55:compile
|  +- org.springframework:spring-web:jar:6.2.19:compile
|  |  +- org.springframework:spring-beans:jar:6.2.19:compile
|  |  \- io.micrometer:micrometer-observation:jar:1.15.12:compile
|  |     \- io.micrometer:micrometer-commons:jar:1.15.12:compile
|  \- org.springframework:spring-webmvc:jar:6.2.19:compile
|     +- org.springframework:spring-aop:jar:6.2.19:compile
|     +- org.springframework:spring-context:jar:6.2.19:compile
|     \- org.springframework:spring-expression:jar:6.2.19:compile
+- org.springframework.boot:spring-boot-devtools:jar:3.5.16:runtime (optional)
|  +- org.springframework.boot:spring-boot:jar:3.5.16:compile
|  \- org.springframework.boot:spring-boot-autoconfigure:jar:3.5.16:compile
\- org.springframework.boot:spring-boot-starter-test:jar:3.5.16:test
   +- org.springframework.boot:spring-boot-test:jar:3.5.16:test
   +- org.springframework.boot:spring-boot-test-autoconfigure:jar:3.5.16:test
   +- com.jayway.jsonpath:json-path:jar:2.9.0:test
   |  \- org.slf4j:slf4j-api:jar:2.0.18:compile
   +- jakarta.xml.bind:jakarta.xml.bind-api:jar:4.0.5:test
   |  \- jakarta.activation:jakarta.activation-api:jar:2.1.4:test
   +- net.minidev:json-smart:jar:2.5.2:test
   |  \- net.minidev:accessors-smart:jar:2.5.2:test
   |     \- org.ow2.asm:asm:jar:9.7.1:test
   +- org.assertj:assertj-core:jar:3.27.7:test
   |  \- net.bytebuddy:byte-buddy:jar:1.17.8:test
   +- org.awaitility:awaitility:jar:4.2.2:test
   +- org.hamcrest:hamcrest:jar:3.0:test
   +- org.junit.jupiter:junit-jupiter:jar:5.12.2:test
   |  +- org.junit.jupiter:junit-jupiter-api:jar:5.12.2:test
   |  |  +- org.opentest4j:opentest4j:jar:1.3.0:test
   |  |  +- org.junit.platform:junit-platform-commons:jar:1.12.2:test
   |  |  \- org.apiguardian:apiguardian-api:jar:1.1.2:test
   |  +- org.junit.jupiter:junit-jupiter-params:jar:5.12.2:test
   |  \- org.junit.jupiter:junit-jupiter-engine:jar:5.12.2:test
   |     \- org.junit.platform:junit-platform-engine:jar:1.12.2:test
   +- org.mockito:mockito-core:jar:5.17.0:test
   |  +- net.bytebuddy:byte-buddy-agent:jar:1.17.8:test
   |  \- org.objenesis:objenesis:jar:3.3:test
   +- org.mockito:mockito-junit-jupiter:jar:5.17.0:test
   +- org.skyscreamer:jsonassert:jar:1.5.3:test
   |  \- com.vaadin.external.google:android-json:jar:0.0.20131108.vaadin1:test
   +- org.springframework:spring-core:jar:6.2.19:compile
   |  \- org.springframework:spring-jcl:jar:6.2.19:compile
   +- org.springframework:spring-test:jar:6.2.19:test
   \- org.xmlunit:xmlunit-core:jar:2.10.4:test
```

---

## Startup Verification Logs

Running `mvn spring-boot:run` executes the `main()` method of `SpringLearnApplication.java` and prints startup logs confirming success:

```text
11:16:35.032 [main] INFO com.cognizant.springlearn.SpringLearnApplication -- Starting SpringLearnApplication main() method...
11:16:35.447 [restartedMain] INFO com.cognizant.springlearn.SpringLearnApplication -- Starting SpringLearnApplication main() method...

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::               (v3.5.16)

2026-07-06T11:16:36.350+05:30  INFO 17496 --- [  restartedMain] c.c.springlearn.SpringLearnApplication   : Starting SpringLearnApplication using Java 25.0.2 with PID 17496 (D:\Cognizant DN 5.0\cognizant_DN_5.0-JavaFSE\Spring REST\Spring Web Project\target\classes started by Anshu PAtel in D:\Cognizant DN 5.0\cognizant_DN_5.0-JavaFSE\Spring REST\Spring Web Project)
2026-07-06T11:16:36.353+05:30  INFO 17496 --- [  restartedMain] c.c.springlearn.SpringLearnApplication   : No active profile set, falling back to 1 default profile: "default"
2026-07-06T11:16:36.468+05:30  INFO 17496 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-07-06T11:16:36.468+05:30  INFO 17496 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-07-06T11:16:38.286+05:30  INFO 17496 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8081 (http)
2026-07-06T11:16:38.326+05:30  INFO 17496 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-07-06T11:16:38.327+05:30  INFO 17496 --- [  restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.55]
2026-07-06T11:16:38.442+05:30  INFO 17496 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2026-07-06T11:16:38.443+05:30  INFO 17496 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1973 ms
2026-07-06T11:16:39.179+05:30  INFO 17496 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-07-06T11:16:39.257+05:30  INFO 17496 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8081 (http) with context path '/'
2026-07-06T11:16:39.271+05:30  INFO 17496 --- [  restartedMain] c.c.springlearn.SpringLearnApplication   : Started SpringLearnApplication in 3.815 seconds (process running for 4.638)
2026-07-06T11:16:39.282+05:30  INFO 17496 --- [  restartedMain] c.c.springlearn.SpringLearnApplication   : SpringLearnApplication main() method successfully executed and application started.
```

## SCREENSHOT

---
<img width="975" height="608" alt="image" src="https://github.com/user-attachments/assets/1da4d121-0f95-44bb-ba05-7a091dfea133" />

---
