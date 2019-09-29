import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const GAME_RULE = 'Answer "yes" if given number is prime. Otherwise answer "no"';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

const generateQuiz = () => {
  const quiz = {};
  const randomNumber = generateRandomInt(500);

  quiz.question = randomNumber;
  quiz.answer = isPrime(randomNumber) ? 'yes' : 'no';

  return quiz;
};

export default () => launchGameEngine(GAME_RULE, generateQuiz);
