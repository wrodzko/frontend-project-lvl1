const availableMathOperations = ['+', '-', '*'];

export const generateRandomInt = (min = -100, max = 100) => Math.floor(
  Math.random() * min + Math.random() * max,
);

export const generateMathSign = () => {
  const operationIndex = generateRandomInt(availableMathOperations.length);

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
