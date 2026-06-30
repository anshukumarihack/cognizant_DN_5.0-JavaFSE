# Exercise 7: Financial Forecasting

## Objective

To implement a recursive algorithm for financial forecasting and predict future values based on past growth rates.

---

## Problem Statement

A financial forecasting tool is required to estimate the future value of an investment using a recursive approach. The prediction is based on the current value, annual growth rate, and number of years.

---

## Folder Structure

```text
Algorithms_Data Structures/
│
├── FinancialForecast.java
└── README.md
```

---

## Understanding Recursion

Recursion is a programming technique in which a method calls itself to solve a problem.

### Components of Recursion

1. Base Case – Stops the recursive calls.
2. Recursive Case – Calls the method again with a smaller problem.

### Example

```java
if(years == 0)
    return currentValue;
```

This acts as the stopping condition.

---

## Algorithm

Future Value Formula:

Future Value = Present Value × (1 + Growth Rate)^Years

Using recursion:

```java
predictFutureValue(
    currentValue * (1 + growthRate),
    growthRate,
    years - 1
);
```

Each recursive call calculates the value for the next year.

---

## Implementation

The program accepts:

* Current Value
* Growth Rate
* Number of Years

and recursively computes the future value.

---

## Execution

Compile:

```bash
javac FinancialForecast.java
```

Run:

```bash
java FinancialForecast
```

---

## Sample Output

```text
Current Value : ₹10000.0
Growth Rate   : 10.0%
Years         : 5
Future Value  : ₹16105.10
```


### Output Screenshot

<img width="748" height="237" alt="image" src="https://github.com/user-attachments/assets/976e3077-8703-47fe-bcc2-831f50866397" />


---

## Time Complexity Analysis

### Recursive Solution

For each year, one recursive call is made.

Time Complexity:

```text
O(n)
```

where n = number of years.

### Space Complexity

```text
O(n)
```

because each recursive call is stored on the call stack.

---

## Optimization

The recursive solution can be optimized using:

### Memoization

Store previously computed values and reuse them instead of recalculating.

### Iterative Approach

Replace recursion with loops to reduce memory usage.

Advantages:

* Lower memory consumption.
* Avoids stack overflow for large inputs.
* Improved performance.

---

## Comparison

| Approach  | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Recursion | O(n)            | O(n)             |
| Iteration | O(n)            | O(1)             |

---

## Conclusion

The recursive financial forecasting algorithm successfully predicts future values based on a growth rate. While recursion provides a simple and elegant solution, iterative methods or memoization can be used to optimize performance for large datasets.
