import launchGameEngine from '..';
import { generateRandomInt, generateMathSign, mathItUp } from '../lib';

const gameTask = 'What number is missing in the progression?';
const progressionNumberCount = 10;
const maxDelta = 10;
const maxRandomNumber = 100;

function generateProgression(firstNumber, unknownNumberPosition, progressionSign, delta) {
  let progression = '';
  let accum = firstNumber;
  let unknownNumber;

  for (let i = 0; i < progressionNumberCount; i += 1) {
    accum = mathItUp(progressionSign)(accum, delta);

    if (i === unknownNumberPosition) {
      progression = `${progression} .. `;
      unknownNumber = accum;
    } else {
      progression = `${progression} ${accum} `;
    }
  }

  return {
    progression,
    unknownNumber,
  };
}

const generateQuiz = () => {
  const quiz = {};
  const firstNumber = generateRandomInt(maxRandomNumber);
  const unknownNumberPosition = generateRandomInt(progressionNumberCount);
  const progressionSign = generateMathSign();
  const delta = generateRandomInt(maxDelta);

  const progression = generateProgression(firstNumber, unknownNumberPosition,
    progressionSign, delta);

  quiz.question = progression.progression;
  quiz.answer = progression.unknownNumber.toString();

  return quiz;
};

export default () => launchGameEngine(gameTask, generateQuiz);
