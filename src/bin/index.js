import readlineSync from 'readline-sync';
import generateRandomInt from './lib';

// First Game
const meetUser = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  const user = readlineSync.question('Type your name... ');

  console.log(`Hello, ${user}!`);
};

// Second Game
const startBrainEvenGame = () => {
  const ATTEMTS_COUNT = 3;

  console.log('---------------------------');
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('---------------------------');

  console.log('May I have your name?');

  const user = readlineSync.question('Type your name... ');

  console.log(`Hello, ${user}!`);
  console.log('---------------------------');

  for (let i = 0; i < ATTEMTS_COUNT; i += 1) {
    const randomInt = generateRandomInt(100);
    const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${user}!`);
      break;
    }

    console.log('---------------------------');

    if (i === 2) {
      console.log(`Congratulations, ${user}!`);
      console.log('---------------------------');
    }
  }
};

export {
  meetUser,
  startBrainEvenGame,
};
