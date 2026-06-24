# Exercise 1: Setting Up JUnit

## Objective

To set up JUnit in a Java project using Maven and create a basic unit test to verify the functionality of the project.

---

## Tools Used

* Visual Studio Code (VS Code)
* Java JDK
* Maven
* JUnit 4.13.2

---

## Project Structure

```text
JUnitDemo
│
├── pom.xml
│
└── src
    ├── main
    │   └── java
    │
    └── test
        └── java
```

---

## JUnit Dependency

The following JUnit dependency was added to the `pom.xml` file:

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

---

## Procedure

1. Created a new Java Maven project in Visual Studio Code.
2. Added the JUnit 4.13.2 dependency to the `pom.xml` file.
3. Created a Java class for testing.
4. Created a JUnit test class in the test directory.
5. Executed the test using Maven and VS Code Test Runner.
6. Verified that the test executed successfully.

---

## Output

The JUnit test executed successfully with the following result:

```text
Tests run: 1
Failures: 0
Errors: 0

BUILD SUCCESS
```

---

## Screenshot of Output

### Successful JUnit Test Execution

> Insert the screenshot of the successful test execution below.

<img width="1582" height="775" alt="Screenshot 2026-06-24 223828" src="https://github.com/user-attachments/assets/900fedda-fc40-4f91-9f93-a85bb53e5a8e" />

<img width="1015" height="291" alt="image" src="https://github.com/user-attachments/assets/77e44012-b5db-4d7a-bfb1-3bea7c1cdd0b" />


---

## Result

JUnit was successfully configured in the Java project. The test case executed successfully, confirming that the project setup and testing environment are working correctly.
