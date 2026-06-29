# Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods in JUnit

## Objective

The objective of this exercise is to understand how to write well-structured unit tests using the **Arrange-Act-Assert (AAA)** pattern and implement **test fixtures** with JUnit's `@Before` and `@After` annotations.

---

## Technologies Used

* Java 20
* JUnit 4.13.2
* Apache Maven 3.9.16
* Visual Studio Code
* Maven for Dependency Management

---

## Project Structure

```text
aaa_pattern_junit
│── src
│   ├── main
│   │   └── java
│   │       └── com
│   │           └── example
│   │               ├── Calculator.java
│   │               └── Main.java
│   │
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── CalculatorTest.java
│
├── pom.xml
└── README.md
```

---

## Exercise Description

This exercise demonstrates:

* Organizing unit tests using the **Arrange-Act-Assert (AAA)** pattern.
* Using **`@Before`** to initialize required objects before each test.
* Using **`@After`** to clean up resources after each test.
* Writing multiple unit tests for a calculator application.

---

## Calculator Operations Tested

The Calculator class includes unit tests for the following operations:

* Addition
* Subtraction
* Multiplication
* Division
* Modulus
* Square
* Power
* Maximum
* Minimum

---

## Arrange-Act-Assert (AAA) Pattern

Each test follows the AAA structure:

### Arrange

Prepare the input data and required objects.

### Act

Execute the method being tested.

### Assert

Verify that the actual result matches the expected result.

---

## Test Fixtures

### `@Before`

Runs before every test case.

Purpose:

* Creates a new `Calculator` object.
* Ensures each test starts with a clean state.

### `@After`

Runs after every test case.

Purpose:

* Cleans up resources.
* Resets object references after execution.

---

## How to Run the Project

### Using VS Code

1. Open the project in Visual Studio Code.
2. Wait for Maven dependencies to load.
3. Open the **Testing** panel.
4. Select **CalculatorTest**.
5. Click **Run Tests**.

### Using Maven

Open a terminal inside the project folder and execute:

```bash
mvn test
```

---

## Expected Output

All test cases should execute successfully.

Example:

```text
Tests run: 9
Failures: 0
Errors: 0
Skipped: 0

BUILD SUCCESS
```

The VS Code Testing panel should display green check marks for every test method.

---

## Screenshots

<img width="893" height="632" alt="image" src="https://github.com/user-attachments/assets/31827a97-1ce0-44f0-b461-da47d47723d8" />

<img width="1016" height="438" alt="image" src="https://github.com/user-attachments/assets/6bc38c80-57b3-435c-bc36-218c84bf10df" />

---

## Learning Outcomes

After completing this exercise, the following concepts were understood:

* Writing unit tests using JUnit 4
* Implementing the Arrange-Act-Assert (AAA) testing pattern
* Using `@Before` and `@After` annotations
* Creating reusable test fixtures
* Executing unit tests using Maven and Visual Studio Code
* Verifying application functionality through automated testing

---

## Conclusion

This exercise demonstrates how to create clean, maintainable, and reusable JUnit test cases by following the Arrange-Act-Assert (AAA) pattern and utilizing setup and teardown methods. These practices improve test readability, reduce duplicate code, and ensure consistent execution of unit tests.
