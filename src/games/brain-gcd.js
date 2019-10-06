import launchGameEngine from '..';
import getRandom from '../lib';

const gameTask = 'Find the greatest common divisor of given numbers.';
const maxRandom = 100;
const minRandom = 0;

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const generateQuiz = () => {
  const first = getRandom(minRandom, maxRandom);
  const second = getRandom(minRandom, maxRandom);

  const question = `${first} ${second}`;
  const answer = getGcd(first, second);

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
