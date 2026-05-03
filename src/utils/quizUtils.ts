export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const calculatePercentage = (score: number, totalQuestions: number): number => {
  if (totalQuestions === 0) return 0;
  return Math.round((score / totalQuestions) * 100);
};

export const getPassStatus = (percentage: number, passScore: number): boolean => {
  return percentage >= passScore;
};

export const getResultMessage = (percentage: number) => {
  if (percentage >= 90) return { title: 'Outstanding!', message: "You're a true Civic Champion!", icon: 'star' };
  if (percentage >= 80) return { title: 'Excellent!', message: "Impressive knowledge! You're well-prepared to vote.", icon: 'thumb_up' };
  if (percentage >= 70) return { title: 'Great Job!', message: 'Good understanding! Review a few topics to strengthen your knowledge.', icon: 'sentiment_satisfied' };
  if (percentage >= 60) return { title: 'You Passed!', message: 'You made it! Consider revisiting some sections.', icon: 'check_circle' };
  return { title: 'Keep Learning!', message: "Don't give up! Review the material and try again.", icon: 'refresh' };
};
