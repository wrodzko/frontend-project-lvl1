import launchGameEngine from '..';
import { generateRandomInt, generateMathSign, mathItUp } from '../lib';

const gameTask = 'What is the result of the expression?';

const generateQuiz = () => {
  const quiz = {};
  const firstInt = generateRandomInt(20);
  const secondInt = generateRandomInt(50);
  const sign = generateMathSign();

  quiz.question = `${firstInt} ${sign} ${secondInt}`;
  quiz.answer = mathItUp(sign)(firstInt, secondInt).toString();

  return quiz;
};

export default () => launchGameEngine(gameTask, generateQuiz);
