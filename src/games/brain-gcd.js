import launchGameEngine from '..';
import generateRandomNumber from '../lib';

const gameTask = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;
const minRandomNumber = 0;

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const generateQuiz = () => {
  const firstNumber = generateRandomNumber(minRandomNumber, maxRandomNumber);
  const secondNumber = generateRandomNumber(minRandomNumber, maxRandomNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
