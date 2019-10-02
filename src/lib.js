const availableMathOperations = ['+', '-', '*'];

export const generateRandomInt = (min = -100, max = 100) => Math.floor(
  Math.random() * min + Math.random() * max,
);

// The functions below are used in two games (Brain progression and Brain calc);
export const generateMathSign = () => {
  const operationIndex = generateRandomInt(0, availableMathOperations.length - 1);

  return availableMathOperations[operationIndex];
};

export const mathItUp = (operator) => {
  switch (operator) {
    case '+': return (x, y) => x + y;
    case '-': return (x, y) => x - y;
    case '*': return (x, y) => x * y;
    default: return () => {};
  }
};
