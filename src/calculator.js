#!/usr/bin/env node

/**
 * Simple Node.js CLI Calculator
 * Supports four basic arithmetic operations:
 * - Addition (add)
 * - Subtraction (sub)
 * - Multiplication (mul)
 * - Division (div)
 * 
 * Usage: node calculator.js <operation> <num1> <num2>
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation
function divide(a, b) {
  if (b === 0) {
    throw new Error("Error: Cannot divide by zero");
  }
  return a / b;
}

// Main CLI function
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error("Usage: node calculator.js <operation> <num1> <num2>");
    console.error("Operations: add, sub, mul, div");
    console.error("Examples:");
    console.error("  node calculator.js add 2 3");
    console.error("  node calculator.js sub 5 2");
    console.error("  node calculator.js mul 4 3");
    console.error("  node calculator.js div 10 2");
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  // Validate input
  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Invalid numbers provided");
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "sub":
        result = subtract(num1, num2);
        break;
      case "mul":
        result = multiply(num1, num2);
        break;
      case "div":
        result = divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error("Valid operations: add, sub, mul, div");
        process.exit(1);
    }

    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export functions for use as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

// Run CLI if this is the main module
if (require.main === module) {
  main();
}
