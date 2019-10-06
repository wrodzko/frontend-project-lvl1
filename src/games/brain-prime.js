import launchGameEngine from '..';
import getRandom from '../lib';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandom = 500;
const minRandom = 0;

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const generateQuiz = () => {
  const random = getRandom(minRandom, maxRandom);

  const question = random;
  const answer = isPrime(random) ? 'yes' : 'no';

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
