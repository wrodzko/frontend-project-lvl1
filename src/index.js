import readlineSync from 'readline-sync';

const attemtsCount = 3;

const putMsgSeparator = () => console.log('\n');

/**
 * Generate main flow for each game.
 * @param {string} gameRule         – The rule of the game.
 * @param {function} generateQuiz   – Return object with question and answer.
 */
export default (gameRule, generateQuiz) => {
  console.log('Welcome to the Brain Games!');

  if (gameRule) {
    console.log(gameRule);
  }

  putMsgSeparator();

  console.log('May I have your name?');
  const user = readlineSync.question('Type your name... ');
  console.log(`Hello, ${user}!`);

  putMsgSeparator();

  for (let i = 0; i < attemtsCount; i += 1) {
    const { question, answer } = generateQuiz();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${user}!`);
      break;
    }

    putMsgSeparator();

    if (i === 2) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};
