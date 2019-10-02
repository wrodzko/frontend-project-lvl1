import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const gameTask = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;
const minRandomNumber = 0;

const getGCD = (x, y) => (y === 0 ? x : getGCD(y, x % y));

const generateRandomNumber = () => generateRandomInt(minRandomNumber, maxRandomNumber);

const generateQuiz = () => {
  const quiz = {};
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();

  quiz.question = `${firstNumber} ${secondNumber}`;
  quiz.answer = getGCD(firstNumber, secondNumber).toString();

  return quiz;
};

export default () => launchGameEngine(gameTask, generateQuiz);
