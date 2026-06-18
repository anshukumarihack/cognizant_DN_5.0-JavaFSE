# Exercise 1: Implementing the Singleton Pattern

## Objective

To implement the Singleton Design Pattern in Java and verify that only one instance of a class is created and used throughout the application.

---

## Problem Statement

Create a Logger utility class that follows the Singleton Pattern. The Logger object should be created only once and shared across the entire application.

---

## Project Structure

```text
SingletonPatternExample/
│
├── SingletonTest.java
└── README.md
```

---

## Components

### Logger Class

* Implements the Singleton Pattern.
* Contains a private static instance variable.
* Provides a public static `getInstance()` method.
* Includes a `log()` method to display messages.

### SingletonTest Class

* Contains the `main()` method.
* Tests whether multiple references point to the same Logger object.

---

## Implementation Details

The Singleton Pattern ensures that only one object of a class exists.

### Key Features

* Private constructor prevents direct object creation.
* Static instance variable stores the single object.
* Public static `getInstance()` method returns the same object every time.

---

## Execution

Compile the program:

```bash
javac SingletonTest.java
```

Run the program:

```bash
java SingletonTest
```

---

## Sample Output

```text
Logger Instance Created
LOG: Application Started
LOG: User Login Successful
logger1 hashcode: 12345678
logger2 hashcode: 12345678
Only one Logger instance exists.
```

### Output Screenshot

<img width="985" height="221" alt="image" src="https://github.com/user-attachments/assets/4d7f429c-36c3-43c2-9726-24dfd8a08e3a" />


---

## Verification

The following statement verifies that both references point to the same object:

```java
if(logger1 == logger2)
```

Since the condition evaluates to `true`, only one Logger instance exists.

The identical hash codes further confirm that the same object is being used.

---

## Benefits of Singleton Pattern

* Ensures only one object is created.
* Saves memory and resources.
* Provides a global access point to the object.
* Maintains consistency across the application.

---

## Conclusion

The Singleton Design Pattern was successfully implemented in a single Java file (`SingletonTest.java`). The program confirms that only one Logger instance is created and shared across different references, demonstrating the core concept of the Singleton Pattern.
