# Exercise 1: Mocking and Stubbing using Mockito

## Objective

The objective of this exercise is to learn how to use the Mockito framework to create mock objects, stub method behaviors, and write unit tests for classes that depend on external services or APIs.

---

## Technologies Used

- Java 20
- JUnit 4.13.2
- Mockito 5.12.0
- Apache Maven 3.9.16
- Visual Studio Code

---

## Project Structure

```text
mockito_mocking_stubbing
│── src
│   ├── main
│   │   └── java
│   │       └── com
│   │           └── example
│   │               ├── ExternalApi.java
│   │               ├── MyService.java
│   │               └── Main.java
│   │
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── MyServiceTest.java
│
├── pom.xml
└── README.md
```

---

## Exercise Description

This exercise demonstrates how to test a service that depends on an external API without making actual API calls.

Mockito is used to:

- Create a mock implementation of the external API.
- Define (stub) the return value of API methods.
- Verify the service behaves correctly using the mocked data.

---

## Classes Used

### ExternalApi

An interface representing an external service that provides data.

### MyService

A service class that depends on the `ExternalApi` interface to fetch data.

### MyServiceTest

A JUnit test class that uses Mockito to mock the external API and verify the behavior of the service.

---

## Mockito Concepts Covered

### Mock Object

A mock object is a simulated object that replaces a real dependency during testing.

Example:

```java
ExternalApi mockApi = mock(ExternalApi.class);
```

---

### Stubbing

Stubbing defines what a mock object should return when a specific method is called.

Example:

```java
when(mockApi.getData()).thenReturn("Mock Data");
```

Whenever `getData()` is invoked, the mock returns `"Mock Data"` instead of calling a real API.

---

### Dependency Injection

Instead of creating the API inside the service class, it is passed through the constructor.

Example:

```java
MyService service = new MyService(mockApi);
```

This makes the service easier to test.

---

## Test Flow

The test follows the Arrange-Act-Assert (AAA) pattern.

### Arrange

- Create the mock object.
- Stub the API response.
- Create the service instance.

### Act

- Call the service method.

### Assert

- Verify that the returned value matches the expected mocked value.

---

## How to Run the Project

### Using Visual Studio Code

1. Open the project.
2. Wait for Maven dependencies to download.
3. Open the **Testing** panel.
4. Select **MyServiceTest**.
5. Click **Run Tests**.

---

### Using Maven

Open the terminal inside the project directory and execute:

```bash
mvn test
```

---

## Expected Output

```text
-------------------------------------------------------
 T E S T S
-------------------------------------------------------

Running com.example.MyServiceTest

Tests run: 1
Failures: 0
Errors: 0
Skipped: 0

BUILD SUCCESS
```

The VS Code Testing panel should display a green check mark indicating that the test passed successfully.

---

## Screenshots

<img width="998" height="446" alt="image" src="https://github.com/user-attachments/assets/f7e55fcf-dfbf-42f6-a168-212997b7ca1d" />


---

## Learning Outcomes

After completing this exercise, you will understand:

- Unit testing using JUnit
- Creating mock objects with Mockito
- Stubbing method behavior
- Dependency Injection
- Testing classes that rely on external APIs
- Writing isolated and maintainable unit tests
- Integrating Mockito with Maven projects

---

## Conclusion

This exercise demonstrates how Mockito simplifies unit testing by replacing external dependencies with mock objects. By using stubbing, tests become fast, reliable, and independent of external systems, allowing developers to verify business logic without requiring real API calls.
