import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const GAME_RULE = 'Find the greatest common divisor of given numbers.';

function gcd(x, y) {
  return y === 0 ? x : gcd(y, x % y);
}

const generateQuiz = () => {
  const quiz = {};
  const firstNumber = generateRandomInt(100);
  const secondNumber = generateRandomInt(100);

  quiz.question = `${firstNumber} ${secondNumber}`;
  quiz.answer = gcd(firstNumber, secondNumber).toString();

  return quiz;
};

export default () => launchGameEngine(GAME_RULE, generateQuiz);
