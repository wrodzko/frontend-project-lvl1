import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 100;

const generateQuiz = () => {
  const quiz = {};

  quiz.question = generateRandomInt(maxRandomNumber);
  quiz.answer = quiz.question % 2 === 0 ? 'yes' : 'no';

  return quiz;
};

export default () => launchGameEngine(gameRule, generateQuiz);
