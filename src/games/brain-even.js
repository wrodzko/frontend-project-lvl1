import launchGameEngine from '..';
import { generateRandomInt } from '../lib';

const GAME_RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuiz = () => {
  const quiz = {};

  quiz.question = generateRandomInt(100);
  quiz.answer = quiz.question % 2 === 0 ? 'yes' : 'no';

  return quiz;
};

export default () => launchGameEngine(GAME_RULE, generateQuiz);
