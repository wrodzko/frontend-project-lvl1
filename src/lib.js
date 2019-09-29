export const generateRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const generateMathSign = () => {
  switch (generateRandomInt(3)) {
    case 0: return '+';
    case 1: return '-';
    default: return '*';
  }
};

export const mathItUp = (operator) => {
  switch (operator) {
    case '+': return (x, y) => x + y;
    case '-': return (x, y) => x - y;
    case '*': return (x, y) => x * y;
    default: return () => {};
  }
};
