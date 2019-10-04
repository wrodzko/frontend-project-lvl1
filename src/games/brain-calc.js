import launchGameEngine from '..';
import generateRandomNumber from '../lib';

const gameTask = 'What is the result of the expression?';
const availableMathOperations = ['+', '-', '*'];
const minRandomNumber = 0;
const maxFirstNumber = 20;
const maxSecondNumber = 50;

export const generateMathSign = (mathOperators = availableMathOperations) => {
  const operationIndex = generateRandomNumber(0, mathOperators.length - 1);
  return mathOperators[operationIndex];
};

export const mathItUp = (operator) => {
  switch (operator) {
    case '+': return (x, y) => x + y;
    case '-': return (x, y) => x - y;
    case '*': return (x, y) => x * y;
    default: return () => {};
  }
};


const generateQuiz = () => {
  const firstNumber = generateRandomNumber(minRandomNumber, maxFirstNumber);
  const secondNumber = generateRandomNumber(minRandomNumber, maxSecondNumber);
  const sign = generateMathSign();

  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = mathItUp(sign)(firstNumber, secondNumber);

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
