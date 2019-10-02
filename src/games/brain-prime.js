import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandomNumber = 500;
const minRandomNumber = 0;

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const generateQuiz = () => {
  const quiz = {};
  const randomNumber = generateRandomInt(minRandomNumber, maxRandomNumber);

  quiz.question = randomNumber;
  quiz.answer = isPrime(randomNumber) ? 'yes' : 'no';

  return quiz;
};

export default () => launchGameEngine(gameTask, generateQuiz);
