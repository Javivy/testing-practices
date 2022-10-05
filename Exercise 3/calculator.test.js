const Calculator = require('./calculator.js');

describe('Calculator', () => {
  test('Add', () => {
    const calculator = new Calculator(5, 10);
    expect(calculator.add()).toBe(15);
  });

  test('Add 2', () => {
    const calculator = new Calculator(3, 7);
    expect(calculator.add()).toBe(10);
  });

  test('Add 3', () => {
    const calculator = new Calculator(4, 15);
    expect(calculator.add()).toBe(19);
  });

  test('Substract 1', () => {
    const calculator = new Calculator(10, 5);
    expect(calculator.substract()).toBe(5);
  });

  test('Substract 2', () => {
    const calculator = new Calculator(15, 5);
    expect(calculator.substract()).toBe(10);
  });

  test('Substract 3', () => {
    const calculator = new Calculator(20, 3);
    expect(calculator.substract()).toBe(17);
  });

  test('Multiply 1', () => {
    const calculator = new Calculator(2, 5);
    expect(calculator.multiply()).toBe(10);
  });

  test('Multiply 2', () => {
    const calculator = new Calculator(5, 5);
    expect(calculator.multiply()).toBe(25);
  });

  test('Multiply 3', () => {
    const calculator = new Calculator(3, 9);
    expect(calculator.multiply()).toBe(27);
  });

  test('Divide 1', () => {
    const calculator = new Calculator(6, 2);
    expect(calculator.divide()).toBe(3);
  });

  test('Divide 2', () => {
    const calculator = new Calculator(10, 2);
    expect(calculator.divide()).toBe(5);
  });

  test('Divide 3', () => {
    const calculator = new Calculator(15, 3);
    expect(calculator.divide()).toBe(5);
  });
});