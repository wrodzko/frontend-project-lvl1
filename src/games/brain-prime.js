import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandomNumber = 500;

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

const generateQuiz = () => {
  const quiz = {};
  const randomNumber = generateRandomInt(maxRandomNumber);

  quiz.question = randomNumber;
  quiz.answer = isPrime(randomNumber) ? 'yes' : 'no';

  return quiz;
};

export default () => launchGameEngine(gameRule, generateQuiz);
