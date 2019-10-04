import launchGameEngine from '..';
import generateRandomNumber from '../lib';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 100;
const minRandomNumber = 0;

const isEven = (number) => number % 2 === 0;

const generateQuiz = () => {
  const question = generateRandomNumber(minRandomNumber, maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
