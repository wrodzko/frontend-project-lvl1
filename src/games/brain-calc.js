/** @module brain-calc */

import launchGameEngine from '..';
import getRandom from '../lib';

const gameTask = 'What is the result of the expression?';
const availableMathOperations = ['+', '-', '*'];
const minRandom = 0;
const maxFirst = 20;
const maxSecond = 50;

/**
 * Generate random math operator from availables.
 * @param   {array} mathOperators
 *          Mathematical operations.
 * @returns {string}
 *          Random operator from availables.
 * @example
 * const generatedOperator = generateMathSign(['*', '+', '-']);
 * console.log(generatedOperator); // => '+'
 */
const generateMathSign = (mathOperators = availableMathOperations) => {
  const operationIndex = getRandom(0, mathOperators.length - 1);
  return mathOperators[operationIndex];
};

/**
 * Creates an operation based on a mathematical sign.
 * @param   {string} operator
 *          Mathematical operator. Supported operators: +, -, *.
 * @returns {function}
 *          Math operation with two arguments.
 * @example
 * const add = mathItUp('+');
 * add(5, 3); // => 8
 */
const mathItUp = (operator) => {
  switch (operator) {
    case '+': return (x, y) => x + y;
    case '-': return (x, y) => x - y;
    case '*': return (x, y) => x * y;
    default: return null;
  }
};

const generateQuiz = () => {
  const first = getRandom(minRandom, maxFirst);
  const second = getRandom(minRandom, maxSecond);
  const sign = generateMathSign();

  const question = `${first} ${sign} ${second}`;
  const answer = mathItUp(sign)(first, second);

  return { question, answer };
};

export default () => launchGameEngine(gameTask, generateQuiz);
