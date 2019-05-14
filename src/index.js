import reload from "./reload";

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export default (ms = 0) =>
  setTimeout(() => reload[randomNumber(1, reload.length)](), ms);
