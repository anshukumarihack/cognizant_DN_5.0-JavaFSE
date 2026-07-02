# Exercise 2: Implementing Dependency Injection

## Objective

Implement **Dependency Injection (DI)** in a Spring Core application using **XML-based configuration**. This exercise demonstrates how the Spring IoC Container manages object creation and injects dependencies between application components.

---

## Scenario

In the **Library Management System**, the `BookService` class depends on the `BookRepository` class to retrieve book information.

Instead of creating objects manually using the `new` keyword, Spring's **Inversion of Control (IoC)** container is used to automatically inject the required dependency through **Setter Injection**.

---

## Technologies Used

- Java 20
- Spring Framework 6
- Maven
- Visual Studio Code

---

## Project Structure

```
exercise_2_dependency_injection
│
├── pom.xml
├── README.md
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── library
│   │   │           ├── App.java
│   │   │           ├── repository
│   │   │           │     └── BookRepository.java
│   │   │           └── service
│   │   │                 └── BookService.java
│   │   │
│   │   └── resources
│   │         └── applicationContext.xml
│   │
│   └── test
│
└── target
```

---

## Dependency

Add the following dependency to the `pom.xml` file:

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>6.1.8</version>
</dependency>
```

---

## Bean Configuration

The Spring IoC container is configured using the `applicationContext.xml` file.

### Configured Beans

- `bookRepository`
- `bookService`

The `bookRepository` bean is injected into the `bookService` bean using **Setter Injection**.

---

## Implementation

### BookRepository

- Acts as the Data Access Layer.
- Retrieves book information.

### BookService

- Acts as the Service Layer.
- Depends on `BookRepository`.
- Receives the dependency through a setter method.

### App

- Loads the Spring Application Context.
- Retrieves the `BookService` bean.
- Invokes the service method.

---

## Dependency Injection Flow

```
Spring IoC Container
        │
        ▼
Creates BookRepository Bean
        │
        ▼
Creates BookService Bean
        │
        ▼
Injects BookRepository into BookService
        │
        ▼
Application Calls BookService
        │
        ▼
BookService Uses BookRepository
```

---

## How to Run

### Compile the Project

```bash
mvn clean compile
```

### Execute the Application

```bash
mvn exec:java
```

> If the Exec Maven Plugin is configured with the `mainClass`.

Alternatively,

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

## SCREENSHOTS

<img width="786" height="117" alt="image" src="https://github.com/user-attachments/assets/888bab7f-508d-4330-a585-ea5c56e1bb9f" />

---

## Concepts Covered

- Spring Core
- Inversion of Control (IoC)
- Dependency Injection (DI)
- Setter Injection
- XML Bean Configuration
- Spring IoC Container
- Bean Wiring
- Maven Project Structure

---

## Learning Outcomes

After completing this exercise, you will be able to:

- Understand the concept of Dependency Injection.
- Configure Spring beans using XML.
- Implement Setter-based Dependency Injection.
- Manage object creation using the Spring IoC Container.
- Build and execute a Spring Core Maven application.

---

## Author

**Anshukumari Kumar**

B.Tech – Computer Science & Engineering

Cognizant Digital Nurture 5.0 – Java Full Stack Engineer (Java FSE)
