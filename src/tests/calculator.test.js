const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ===== ADDITION TESTS =====
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add floating point numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ===== SUBTRACTION TESTS =====
  describe('subtract()', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract floating point numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should handle large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  // ===== MULTIPLICATION TESTS =====
  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive by negative', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -6)).toBe(24);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply floating point numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should handle decimal multiplication', () => {
      expect(multiply(3.5, 2.5)).toBeCloseTo(8.75);
    });
  });

  // ===== DIVISION TESTS =====
  describe('divide()', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Error: Cannot divide by zero');
    });

    test('should throw error when dividing any number by zero', () => {
      expect(() => divide(100, 0)).toThrow();
      expect(() => divide(-50, 0)).toThrow();
      expect(() => divide(0, 0)).toThrow();
    });

    test('should divide floating point numbers', () => {
      expect(divide(10.5, 2.5)).toBeCloseTo(4.2);
    });

    test('should handle large number division', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });

    test('should divide one by a number', () => {
      expect(divide(1, 2)).toBe(0.5);
    });
  });

  // ===== COMBINED OPERATIONS TESTS =====
  describe('Combined Operations', () => {
    test('should chain addition and subtraction', () => {
      let result = add(2, 3);
      result = subtract(result, 1);
      expect(result).toBe(4);
    });

    test('should chain multiplication and division', () => {
      let result = multiply(4, 5);
      result = divide(result, 2);
      expect(result).toBe(10);
    });

    test('should perform all four operations in sequence', () => {
      let result = add(5, 3);        // 8
      result = multiply(result, 2);   // 16
      result = subtract(result, 4);   // 12
      result = divide(result, 3);     // 4
      expect(result).toBe(4);
    });
  });

  // ===== IMAGE EXAMPLE TESTS =====
  describe('Examples from calc-basic-operations.png', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });
});
