package com.example;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up Calculator...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = 20;
        int b = 10;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {

        // Arrange
        int a = 20;
        int b = 10;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(10, result);
    }

    @Test
    public void testMultiplication() {

        // Arrange
        int a = 5;
        int b = 4;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(20, result);
    }

    @Test
    public void testDivision() {

        // Arrange
        int a = 20;
        int b = 4;

        // Act
        double result = calculator.divide(a, b);

        // Assert
        assertEquals(5.0, result, 0.001);
    }

    @Test
    public void testModulus() {

        // Arrange
        int a = 20;
        int b = 3;

        // Act
        int result = calculator.modulus(a, b);

        // Assert
        assertEquals(2, result);
    }

    @Test
    public void testSquare() {

        // Arrange
        int a = 5;

        // Act
        int result = calculator.square(a);

        // Assert
        assertEquals(25, result);
    }

    @Test
    public void testPower() {

        // Arrange
        int base = 2;
        int exponent = 3;

        // Act
        double result = calculator.power(base, exponent);

        // Assert
        assertEquals(8.0, result, 0.001);
    }

    @Test
    public void testMaximum() {

        // Arrange
        int a = 50;
        int b = 100;

        // Act
        int result = calculator.max(a, b);

        // Assert
        assertEquals(100, result);
    }

    @Test
    public void testMinimum() {

        // Arrange
        int a = 50;
        int b = 100;

        // Act
        int result = calculator.min(a, b);

        // Assert
        assertEquals(50, result);
    }
}