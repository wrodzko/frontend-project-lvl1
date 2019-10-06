import launchGameEngine from '..';
import getRandom from '../lib';

const gameTask = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDelta = 10;
const maxRandom = 100;
const minRandom = 0;

function generateProgression(first, delta) {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(first + i * delta);
  }

  return progression;
}

const generateQuiz = () => {
  const first = getRandom(minRandom, maxRandom);
  const unknownPosition = getRandom(minRandom, progressionLength);
  const delta = getRandom(minRandom, maxDelta);

  const progression = generateProgression(first, delta);

  const answer = progression[unknownPosition];
  progression[unknownPosition] = '..';

  const question = progression.join(' ');

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
