import launchGameEngine from '..';
import { generateRandomInt, generateMathSign, mathItUp } from '../lib';

const gameRule = 'What number is missing in the progression?';
const progressionNumberCount = 10;
const maxDelta = 10;
const maxRandomNumber = 100;

function generateProgression() {
  const firstNumber = generateRandomInt(maxRandomNumber);
  const unknownNumberPosition = generateRandomInt(progressionNumberCount);
  const progressionSign = generateMathSign();
  const delta = generateRandomInt(maxDelta);

  let progression = '';
  let accum = firstNumber;
  let unknownNumber;

  for (let i = 0; i < progressionNumberCount; i += 1) {
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

export default () => launchGameEngine(gameRule, generateQuiz);
