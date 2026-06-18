# Exercise 2: Implementing the Factory Method Pattern

## Objective

To implement the Factory Method Design Pattern in Java for creating different types of documents without specifying their concrete classes directly.

---

## Problem Statement

Create a document management system that supports multiple document types such as:

* Word Document
* PDF Document
* Excel Document

Use the Factory Method Pattern to create these document objects through dedicated factory classes.

---

## Project Structure

```text
FactoryMethodExample/
│
├── Document.java
├── DocumentFactory.java
├── WordDocument.java
├── PdfDocument.java
├── ExcelDocument.java
├── WordDocumentFactory.java
├── PdfDocumentFactory.java
├── ExcelDocumentFactory.java
└── TestFactory.java
```

---

## Components

### Product Interface

* Document

### Concrete Products

* WordDocument
* PdfDocument
* ExcelDocument

### Factory Class

* DocumentFactory

### Concrete Factories

* WordDocumentFactory
* PdfDocumentFactory
* ExcelDocumentFactory

### Client Class

* TestFactory

---

## Implementation

The Factory Method Pattern defines an interface for creating objects and allows subclasses to decide which object to instantiate.

Each concrete factory creates a specific type of document.

---

## Execution

Compile all Java files:

```bash
javac *.java
```

Run the program:

```bash
java TestFactory
```

---

## Output

```text
Opening Word Document
Opening PDF Document
Opening Excel Document
```

### Output Screenshot

<img width="747" height="155" alt="image" src="https://github.com/user-attachments/assets/dcc83cd6-b753-4a06-b9ec-8f7146a5871a" />


---

## Benefits of Factory Method Pattern

* Promotes loose coupling.
* Encapsulates object creation logic.
* Improves code maintainability.
* Easy to extend with new document types.

---

## Conclusion

The Factory Method Pattern was successfully implemented using separate factory classes for Word, PDF, and Excel documents. The client interacts with the factory classes instead of directly creating document objects, demonstrating the principle of abstraction and loose coupling.


---

## Benefits of Factory Method Pattern

* Promotes loose coupling.
* Encapsulates object creation logic.
* Improves code maintainability.
* Easy to extend with new document types.

---

## Conclusion

The Factory Method Pattern was successfully implemented using separate factory classes for Word, PDF, and Excel documents. The client interacts with the factory classes instead of directly creating document objects, demonstrating the principle of abstraction and loose coupling.
