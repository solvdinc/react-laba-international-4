# TypeScript practice

## 1. Overview

### Build a Calculator

Your task is to build a TypeScript program that performs basic arithmetic calculations. The program should allow users to add, subtract, multiply, divide, calculate powers, and calculate square roots.

### Definition of done

- Create a Calculator interface that defines the following methods:
  - `add(num1: number, num2: number): Result`
  - `subtract(num1: number, num2: number): Result`
  - `multiply(num1: number, num2: number): Result`
  - `divide(num1: number, num2: number): Result`
  - `power(base: number, exponent: number): Result`
  - `sqrt(num: number): Result` where `Result` is an interface that defines a value property of type number and an error property of type string.
- Implement the `Calculator` interface in a `BasicCalculator` class.
- The `add`, `subtract`, `multiply`, and `divide` methods should perform the corresponding operations and return a `Result` object with the calculated value and an empty error message.
- The `power` method should calculate the value of base raised to the power of exponent and return a `Result` object with the calculated value and an empty error message. If the `exponent` parameter is not a positive integer, return an error message that says “Exponent must be a positive integer”.
- The `sqrt` method should calculate the square root of the `num` parameter and return a `Result` object with the calculated value and an empty error message. If the num parameter is negative, return an error message that says “Cannot calculate square root of negative number”.
- In addition to the above requirements, your TypeScript code should be well-organized, well-documented, and free of any linting errors or warnings.
- Test your code thoroughly to make sure it works correctly and handles all error cases.
