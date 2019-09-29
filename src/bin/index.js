import readlineSync from 'readline-sync';

export default () => {
  console.log('May I have your name?');

  const user = readlineSync.question('Type your name... ');

  console.log('---------------------------');
  console.log(`Hello, ${user}!`);
};
