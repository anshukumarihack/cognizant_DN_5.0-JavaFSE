# Exercise 1: Configuring a Basic Spring Application

## Objective

Configure a basic Spring Framework application using XML-based configuration and demonstrate Dependency Injection (DI) between service and repository layers.

---

## Scenario

A company is developing a **Library Management System**. The backend is built using the Spring Framework, where Spring manages object creation and dependency injection through an XML configuration file.

---

## Technologies Used

- Java 20
- Spring Framework (Spring Context)
- Maven
- Visual Studio Code

---

## Project Structure

```
library_management
│── pom.xml
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── library
│   │   │           ├── App.java
│   │   │           ├── service
│   │   │           │     └── BookService.java
│   │   │           └── repository
│   │   │                 └── BookRepository.java
│   │   │
│   │   └── resources
│   │         └── applicationContext.xml
│   │
│   └── test
│
└── target
```

---

## Dependencies

Add the following dependency in `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>6.1.8</version>
</dependency>
```

---

## Configuration

Spring beans are configured in `applicationContext.xml`.

Configured Beans:

- `BookRepository`
- `BookService`

`BookService` receives `BookRepository` through setter-based dependency injection.

---

## Classes

### BookRepository

Responsible for fetching book information.

### BookService

Calls the repository to display book details.

### App

Loads the Spring Application Context and retrieves the `BookService` bean.

---

## How to Run

Compile the project:

```bash
mvn clean compile
```

Run the application:

```bash
mvn exec:java
```

> If the Exec Maven Plugin is configured with the main class.

Or

```bash
mvn exec:java -Dexec.mainClass=com.library.App
```

---

## Expected Output

```
Book Service: Calling Repository...
Book Repository: Fetching book details...
```

---

## Screenshots


<img width="767" height="203" alt="image" src="https://github.com/user-attachments/assets/b9a7c29d-32e1-4bfb-8a3f-eef9d6b2f767" />


<img width="886" height="96" alt="image" src="https://github.com/user-attachments/assets/1fbcbea1-756d-460b-abfe-00128eb81769" />

---


## Concepts Covered

- Spring Framework Basics
- Inversion of Control (IoC)
- Dependency Injection (DI)
- XML Bean Configuration
- Spring Application Context
- Maven Project Structure
- Setter Injection

---

## Learning Outcome

After completing this exercise, you will understand how to:

- Configure a Spring Core application.
- Define beans using XML configuration.
- Perform setter-based dependency injection.
- Load and use the Spring Application Context.
- Build and execute a Maven-based Spring project.

---

**Author:** Anshukumari Kumar
