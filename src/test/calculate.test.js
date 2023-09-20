import calculate from '../components/logic/calculate';

describe('calculate', () => {
  // Test case for addition
  it('should correctly add two numbers', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '=';
    const expected = {
      total: '8',
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Test case for subtraction
  it('should correctly subtract two numbers', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '-',
    };
    const buttonName = '=';
    const expected = {
      total: '7',
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Test case for multiplication
  it('should correctly multiply two numbers', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: 'x',
    };
    const buttonName = '=';
    const expected = {
      total: '15',
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Test case for division
  it('should correctly divide two numbers', () => {
    const obj = {
      total: '10',
      next: '2',
      operation: '÷',
    };
    const buttonName = '=';
    const expected = {
      total: '5',
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });
});
