package com.example;

public class Calculator {

    // Addition
    public int add(int a, int b) {
        return a + b;
    }

    // Subtraction
    public int subtract(int a, int b) {
        return a - b;
    }

    // Multiplication
    public int multiply(int a, int b) {
        return a * b;
    }

    // Division
    public double divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Cannot divide by zero.");
        }
        return (double) a / b;
    }

    // Modulus
    public int modulus(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Cannot perform modulus by zero.");
        }
        return a % b;
    }

    // Square
    public int square(int a) {
        return a * a;
    }

    // Power
    public double power(int base, int exponent) {
        return Math.pow(base, exponent);
    }

    // Maximum
    public int max(int a, int b) {
        return Math.max(a, b);
    }

    // Minimum
    public int min(int a, int b) {
        return Math.min(a, b);
    }
}