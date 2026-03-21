const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
// test de divide y multiply
test('adds 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('adds 20 / 5 to equal 4', () => {
  expect(calculator.divide(20, 4)).toBe(5);
});

test('subtract 5 * 4 to equal 10', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test('subtract -5 * -10 to equal 50', () => {
  expect(calculator.multiply(-5, -10)).toBe(50);
});

test('divide by zero ahould throw error', () => {
  expect( () => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
});

