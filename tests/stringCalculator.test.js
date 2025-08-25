import { describe, expect, it } from 'vitest';
import { add } from '../stringCalculator';

describe('Test of fucntion add()', () => {
  it('Returns 0 for empty sting', () => {
    expect(add('')).toBe(0)
  });

  it('Returns value if only one number', () => {
    expect(add('1')).toBe(1)
  });

  it('Returns sum of multiple numbers', () => {
    expect(add('1,2,3')).toBe(6)
  });

  it('Returns sum of multiple numbers with \n separator', () => {
    expect(add('1\n2,3')).toBe(6)
  });

  it('Returns sum with selected delimiter', () => {
    expect(add('//;\n1;2')).toBe(3)
  });

  it('handle negative values', () => {
    expect(() => { add('1,-5') }).toThrowError('Negatives not allowed. -5')
  });

  it('handle multiple negative values', () => {
    expect(() => { add('1,-5,-8') }).toThrowError('Negatives not allowed. -5, -8')
  });

  it('handle values greater than 1000', () => {
    expect(add('1\n2,1002')).toBe(3)
  });

  it('handle multiple char separator', () => {
    expect(add('//[***]\n1***2***3')).toBe(6)
  })

  it('handle multiple selected separators', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6)
  })

  it('handle multiple selected separators of multiple chars', () => {
    expect(add('//[**][%%]\n1**2%%3')).toBe(6)
  })
})