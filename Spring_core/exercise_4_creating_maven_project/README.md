# Exercise 4: Creating and Configuring a Maven Project

## Objective

Create and configure a Maven project for a Spring-based Library Management application by adding the required Spring Framework dependencies and configuring the Maven Compiler Plugin.

---

## Scenario

A new **Library Management System** is being developed using the Spring Framework. To manage project dependencies efficiently and automate the build process, Maven is used as the build and dependency management tool.

This exercise demonstrates how to:

- Create a Maven project.
- Add Spring Framework dependencies.
- Configure the Maven Compiler Plugin.
- Build the project successfully using Maven.

---

## Technologies Used

- Java 8 (Compiler Target)
- Apache Maven
- Spring Framework 6
- Visual Studio Code

---

## Project Structure

```
exercise_4_creating_maven_project
│
├── pom.xml
├── README.md
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── library
│   │   │           └── Main.java
│   │   │
│   │   └── resources
│   │
│   └── test
│
└── target
```

---

## Maven Dependencies

The following Spring Framework modules were added to the project.

| Dependency | Purpose |
|------------|---------|
| Spring Context | Provides the Spring IoC Container and Bean Management |
| Spring AOP | Supports Aspect-Oriented Programming |
| Spring WebMVC | Enables Spring MVC for Web Applications |

---

## Maven Compiler Plugin

The Maven Compiler Plugin is configured to compile the project using Java 8.

```xml
<build>
    <plugins>

        <plugin>

            <groupId>org.apache.maven.plugins</groupId>

            <artifactId>maven-compiler-plugin</artifactId>

            <version>3.11.0</version>

            <configuration>

                <source>1.8</source>

                <target>1.8</target>

            </configuration>

        </plugin>

    </plugins>
</build>
```

---

## Build the Project

Open the project directory and execute:

```bash
mvn clean compile
```

---

## Verify Dependencies

To verify that all dependencies have been downloaded successfully:

```bash
mvn dependency:tree
```

Expected Spring modules include:

- spring-context
- spring-aop
- spring-webmvc

---

## Expected Build Output

```
BUILD SUCCESS
```

---

## SCREENSHOT

<img width="1058" height="606" alt="image" src="https://github.com/user-attachments/assets/dfd6b4fa-d01b-4bb1-935f-398c3bde0a70" />

---

## Concepts Covered

- Apache Maven
- Project Object Model (POM)
- Dependency Management
- Spring Framework Dependencies
- Maven Compiler Plugin
- Java Version Configuration
- Maven Build Lifecycle

---

## Learning Outcomes

After completing this exercise, you will be able to:

- Create a Maven project from scratch.
- Manage project dependencies using Maven.
- Configure Spring Framework libraries.
- Configure the Maven Compiler Plugin.
- Build Java projects using Maven.
- Verify project dependencies using Maven commands.

---

## Commands Used

### Compile the Project

```bash
mvn clean compile
```

### Verify Dependencies

```bash
mvn dependency:tree
```

### Display Effective POM (Optional)

```bash
mvn help:effective-pom
```

---

## Conclusion

This exercise demonstrates the setup of a Maven-based Spring project by configuring the required Spring Framework dependencies and the Maven Compiler Plugin. Maven simplifies dependency management, project configuration, and the overall build process, making it an essential tool for Spring application development.

---

## Author

**Anshukumari Kumar**

**B.Tech – Computer Science & Engineering**

**Cognizant Digital Nurture 5.0 – Java Full Stack Engineer (Java FSE)**
