import { describe, it, expect } from 'vitest';
import { calculatePercentage, getPassStatus, getResultMessage } from './quizUtils';

describe('Quiz Utilities', () => {
  it('should calculate percentage correctly', () => {
    expect(calculatePercentage(5, 10)).toBe(50);
    expect(calculatePercentage(3, 4)).toBe(75);
    expect(calculatePercentage(0, 10)).toBe(0);
  });

  it('should return 0 for total questions 0', () => {
    expect(calculatePercentage(5, 0)).toBe(0);
  });

  it('should determine pass status correctly', () => {
    expect(getPassStatus(60, 60)).toBe(true);
    expect(getPassStatus(59, 60)).toBe(false);
    expect(getPassStatus(80, 70)).toBe(true);
  });

  it('should return correct result messages based on percentage', () => {
    expect(getResultMessage(95).title).toBe('Outstanding!');
    expect(getResultMessage(85).title).toBe('Excellent!');
    expect(getResultMessage(75).title).toBe('Great Job!');
    expect(getResultMessage(65).title).toBe('You Passed!');
    expect(getResultMessage(50).title).toBe('Keep Learning!');
  });
});
