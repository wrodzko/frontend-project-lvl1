import launchGameEngine from '..';
import { generateRandomInt, generateMathSign, mathItUp } from '../lib';

const gameTask = 'What is the result of the expression?';
const minRandomNumber = 0;
const maxFirstNumber = 20;
const maxSecondNumber = 50;

const generateRandomNumber = (maxNumber) => generateRandomInt(minRandomNumber, maxNumber);

const generateQuiz = () => {
  const quiz = {};
  const firstNumber = generateRandomNumber(maxFirstNumber);
  const secondNumber = generateRandomNumber(maxSecondNumber);
  const sign = generateMathSign();

  quiz.question = `${firstNumber} ${sign} ${secondNumber}`;
  quiz.answer = mathItUp(sign)(firstNumber, secondNumber).toString();

  return quiz;
};

export default () => launchGameEngine(gameTask, generateQuiz);
