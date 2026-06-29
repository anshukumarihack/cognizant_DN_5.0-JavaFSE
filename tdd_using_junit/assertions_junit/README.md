# Exercise 3: Assertions in JUnit

## Objective

The objective of this exercise is to understand and implement different JUnit assertions to validate expected outcomes in unit tests. Assertions help verify whether the actual result of a test matches the expected result.

---

## Tools & Technologies

* Java
* JUnit 4.13.2
* Maven
* Visual Studio Code (VS Code)

---

## Project Structure

```text
assertions_junit
│── src
│   ├── main
│   │   └── java
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── AssertionsTest.java
│
├── pom.xml
├── README.md
└── target
```

---

## Assertions Used

The following JUnit assertions were implemented in this exercise:

| Assertion         | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| `assertEquals()`  | Verifies that the expected value matches the actual value. |
| `assertTrue()`    | Verifies that a given condition evaluates to `true`.       |
| `assertFalse()`   | Verifies that a given condition evaluates to `false`.      |
| `assertNull()`    | Verifies that an object reference is `null`.               |
| `assertNotNull()` | Verifies that an object reference is not `null`.           |

---

## Procedure

1. Created a Maven-based Java project in Visual Studio Code.
2. Added the JUnit 4.13.2 dependency in the `pom.xml` file.
3. Created the `AssertionsTest` class inside the `src/test/java` directory.
4. Implemented multiple JUnit assertion methods.
5. Executed the test using the VS Code Java Test Runner.
6. Verified that all assertions passed successfully.

---

## Expected Output

```text
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.example.AssertionsTest

Tests run: 1
Failures: 0
Errors: 0
Skipped: 0

BUILD SUCCESS
```

---

## Output Screenshot

> Add the screenshot of the successful test execution below.

<img width="1027" height="406" alt="image" src="https://github.com/user-attachments/assets/04edea1b-d95b-4159-8d20-f251a8d56e6b" />


---

## Learning Outcomes

* Understood the purpose of unit testing.
* Learned how to use JUnit assertions.
* Verified test results using different assertion methods.
* Successfully executed JUnit test cases in Visual Studio Code using Maven.

---

## Conclusion

This exercise demonstrates the use of various JUnit assertion methods to validate different conditions in unit tests. All test cases executed successfully, confirming that the assertions work as expected and that the JUnit testing environment is configured correctly.
