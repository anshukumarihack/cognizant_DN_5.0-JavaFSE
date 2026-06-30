# Exercise 2: E-commerce Platform Search Function

## Objective

To implement Linear Search and Binary Search algorithms for an e-commerce platform and compare their performance using time complexity analysis.

---

## Folder Structure

```text
Algorithms_Data Structures/
│
├── Product.java
├── SearchAlgorithms.java
└── README.md
```

---

## Problem Statement

An e-commerce platform requires an efficient search mechanism to find products quickly. This exercise implements both Linear Search and Binary Search algorithms to locate products based on their Product ID.

---

## Product Attributes

Each product contains:

* Product ID
* Product Name
* Category

---

## Algorithms Implemented

### Linear Search

Linear Search checks each element sequentially until the target is found.

#### Time Complexity

* Best Case: O(1)
* Average Case: O(n)
* Worst Case: O(n)

---

### Binary Search

Binary Search repeatedly divides a sorted array into two halves to locate the target.

#### Time Complexity

* Best Case: O(1)
* Average Case: O(log n)
* Worst Case: O(log n)

---

## Big O Notation

Big O Notation is used to measure the efficiency of an algorithm by describing how the running time grows as the input size increases.

Examples:

* O(1) → Constant Time
* O(log n) → Logarithmic Time
* O(n) → Linear Time
* O(n²) → Quadratic Time

---

## Execution

Compile:

```bash
javac *.java
```

Run:

```bash
java SearchAlgorithms
```

---

Output

<img width="757" height="202" alt="image" src="https://github.com/user-attachments/assets/bbed53ef-8cd3-41eb-a870-c24fc0f7f0d2" />


---

## Analysis

| Algorithm     | Best Case | Average Case | Worst Case |
| ------------- | --------- | ------------ | ---------- |
| Linear Search | O(1)      | O(n)         | O(n)       |
| Binary Search | O(1)      | O(log n)     | O(log n)   |

---

## Conclusion

Binary Search is more suitable for large-scale e-commerce platforms because it provides significantly faster search performance compared to Linear Search. However, Binary Search requires the data to be sorted before searching.
