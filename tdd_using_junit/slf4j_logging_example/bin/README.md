# Exercise 1: Logging Error Messages and Warning Levels using SLF4J

## Objective

The objective of this exercise is to understand how to implement logging in a Java application using the **SLF4J (Simple Logging Facade for Java)** API and **Logback**. This exercise demonstrates logging messages with different severity levels, specifically **ERROR** and **WARN**, to improve application monitoring and debugging.

---

## Technologies Used

- Java 20
- Apache Maven 3.9.16
- SLF4J API 1.7.30
- Logback Classic 1.2.3
- Visual Studio Code

---

## Project Structure

```text
slf4j_logging_example
│── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           ├── LoggingExample.java
│   │   │           └── Main.java
│   │   │
│   │   └── resources
│   │
│   └── test
│       └── java
│
├── pom.xml
└── README.md
```

---

## Exercise Description

This exercise demonstrates how to configure and use the **SLF4J logging framework** with **Logback** in a Maven-based Java application.

The application logs messages with different severity levels, allowing developers to monitor application execution and identify issues more effectively.

---

## Dependencies Used

The following Maven dependencies are added to the project:

- **SLF4J API** – Provides the logging interface.
- **Logback Classic** – Implements the SLF4J logging framework and prints log messages to the console.

---

## Logging Levels Demonstrated

### ERROR

Used to log serious issues that may prevent the application from functioning correctly.

Example:

```text
This is an error message.
```

Typical use cases:

- Database connection failure
- File not found
- Unexpected application exceptions

---

### WARN

Used to indicate potential issues that do not immediately stop the application.

Example:

```text
This is a warning message.
```

Typical use cases:

- Invalid user input
- Deprecated API usage
- Low disk space

---

## How the Program Works

1. Creates a logger using `LoggerFactory`.
2. Initializes the logger for the current class.
3. Logs an **ERROR** message.
4. Logs a **WARN** message.
5. Displays both messages in the console with timestamps and log levels.

---

## How to Run the Project

### Using Visual Studio Code

1. Open the project in Visual Studio Code.
2. Wait for Maven dependencies to download.
3. Open `LoggingExample.java`.
4. Click the **Run** button above the `main()` method.

---

### Using Maven

Open a terminal inside the project directory and execute:

```bash
mvn clean compile
```

Run the application:

```bash
mvn exec:java -Dexec.mainClass="com.example.LoggingExample"
```

Alternatively, run `LoggingExample.java` directly from Visual Studio Code.

---

## Expected Output

```text
14:25:08.123 ERROR com.example.LoggingExample - This is an error message.
14:25:08.126 WARN  com.example.LoggingExample - This is a warning message.
```

*Note:* The timestamp may vary depending on your system.

---

## Screenshots

<img width="786" height="120" alt="image" src="https://github.com/user-attachments/assets/bdb588bb-0dd1-462f-bb08-ba5cc4163a73" />


---

## Learning Outcomes

After completing this exercise, you will understand:

- Introduction to SLF4J
- Configuring Logback with Maven
- Creating logger instances
- Logging messages with different severity levels
- Difference between **ERROR** and **WARN** logging
- Monitoring application execution using logs
- Running Maven-based Java applications in Visual Studio Code

---

## Conclusion

This exercise demonstrates the fundamentals of application logging using **SLF4J** and **Logback**. Logging is an essential practice in software development because it helps developers monitor application behavior, diagnose problems, and maintain applications efficiently. Understanding different logging levels enables developers to produce meaningful logs that simplify debugging and production support.
