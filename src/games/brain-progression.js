import launchGameEngine from '..';
import generateRandomNumber from '../lib';

const gameTask = 'What number is missing in the progression?';
const progressionNumberCount = 10;
const maxDelta = 10;
const maxRandomNumber = 100;
const minRandomNumber = 0;

function generateProgression(firstNumber, delta) {
  const progression = [];

  for (let i = 0; i < progressionNumberCount; i += 1) {
    progression.push(firstNumber + i * delta);
  }

  return progression;
}

const generateQuiz = () => {
  const firstNumber = generateRandomNumber(minRandomNumber, maxRandomNumber);
  const unknownNumberPosition = generateRandomNumber(minRandomNumber, progressionNumberCount);
  const delta = generateRandomNumber(minRandomNumber, maxDelta);

  const progression = generateProgression(firstNumber, delta);

  const answer = progression[unknownNumberPosition];
  progression[unknownNumberPosition] = '..';

  const question = progression.join(' ');

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
