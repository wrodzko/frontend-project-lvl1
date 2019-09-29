import launchGameEngine from '..';
import { generateRandomInt, generateMathSign, mathItUp } from '../lib';

const GAME_RULE = 'What number is missing in the progression?';
const PROGRESSION_NUMBERS_COUNT = 10;
const MAX_DELTA = 10;
const MAX_RANDOM_NUMBER = 100;

function generateProgression() {
  const firstNumber = generateRandomInt(MAX_RANDOM_NUMBER);
  const unknownNumberPosition = generateRandomInt(PROGRESSION_NUMBERS_COUNT);
  const progressionSign = generateMathSign();
  const delta = generateRandomInt(MAX_DELTA);

  let progression = '';
  let accum = firstNumber;
  let unknownNumber;

  for (let i = 0; i < PROGRESSION_NUMBERS_COUNT; i += 1) {
    accum = mathItUp(progressionSign)(accum, delta);

    if (i === unknownNumberPosition) {
      progression += '..';
      unknownNumber = accum;
    } else {
      progression += accum;
    }

    progression += ' ';
  }

  return {
    progression,
    unknownNumber,
  };
}

const generateQuiz = () => {
  const quiz = {};
  const progression = generateProgression();

  quiz.question = progression.progression;
  quiz.answer = progression.unknownNumber.toString();

  return quiz;
};

export default () => launchGameEngine(GAME_RULE, generateQuiz);
