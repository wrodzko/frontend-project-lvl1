export default (min = -100, max = 100) => Math.floor(
  Math.random() * min + Math.random() * max,
);
