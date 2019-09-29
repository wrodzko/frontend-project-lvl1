import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const gameRule = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;

function gcd(x, y) {
  return y === 0 ? x : gcd(y, x % y);
}

const generateQuiz = () => {
  const quiz = {};
  const firstNumber = generateRandomInt(maxRandomNumber);
  const secondNumber = generateRandomInt(maxRandomNumber);

  quiz.question = `${firstNumber} ${secondNumber}`;
  quiz.answer = gcd(firstNumber, secondNumber).toString();

  return quiz;
};

export default () => launchGameEngine(gameRule, generateQuiz);
