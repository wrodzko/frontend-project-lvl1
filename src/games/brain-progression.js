import launchGameEngine from '..';
import getRandom from '../lib';

const gameTask = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDelta = 10;
const maxRandom = 100;
const minRandom = 0;

function generateProgression(first, delta, length) {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(first + i * delta);
  }

  return progression;
}

const generateQuiz = () => {
  const first = getRandom(minRandom, maxRandom);
  const hiddenElementPosition = getRandom(minRandom, progressionLength);
  const delta = getRandom(minRandom, maxDelta);

  const progression = generateProgression(first, delta, progressionLength);

  const answer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';

  const question = progression.join(' ');

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
