import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 100;
const minRandomNumber = 0;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateQuiz = () => {
  const quiz = {};

  quiz.question = generateRandomInt(minRandomNumber, maxRandomNumber);
  quiz.answer = isEven(quiz.question);

  return quiz;
};

export default () => launchGameEngine(gameTask, generateQuiz);
