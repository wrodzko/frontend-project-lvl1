import launchGameEngine from '..';
import getRandom from '../lib';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandom = 100;
const minRandom = 0;

const isEven = (number) => number % 2 === 0;

const generateQuiz = () => {
  const question = getRandom(minRandom, maxRandom);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
