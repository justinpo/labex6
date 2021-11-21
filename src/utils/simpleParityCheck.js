import { isBinary, generateParity } from '.';

const getParityBit = (bits) => {
  return bits[bits.length - 1];
};

const isSyndrome = (input) => {
  const rParity = parseInt(getParityBit(input));
  const rCount = parseInt(generateParity(input.substring(0, input.length - 1)));

  return rParity === rCount;
};

const simpleParityCheck = (inputA, inputB) => {
  const isInputAValid = inputA.length === 8 && isBinary(inputA);
  const isInputBValid = inputB.length === 9 && isBinary(inputB);

  if (!isInputAValid || !isInputBValid) {
    return 'Invalid Input';
  }

  const status = isSyndrome(inputB)
    ? inputB.substring(0, inputB.length - 1)
    : 'Discarded';

  const sentCodeword = inputA + generateParity(inputA);

  const output = `@Sender\nCodeword: ${sentCodeword}\n\n@Receiver\nData word: ${status}`;

  return output;
};

export default simpleParityCheck;
