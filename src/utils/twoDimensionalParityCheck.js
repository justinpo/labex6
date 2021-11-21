import { isBinary, generateParity, removeSpaces } from '.';

const convertToArray = (input) => {
  let string = removeSpaces(input);
  let output = new Array(5);

  for (let i = 0; i < 5; i++) {
    output[i] = new Array(9);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 9; j++) {
      output[i][j] = string[i * 9 + (j + 1) - 1];
    }
  }
  return output;
};

const getRowParity = (input) => {
  let error = 0;
  let temp = [];
  let parityBit;
  let i;
  let j;

  for (i = 0; i < 4; i++) {
    for (j = 0; j < 8; j++) {
      temp.push(input[i][j]);
    }
    parityBit = generateParity(temp);
    if (parityBit !== parseInt(input[i][j])) error++;
    temp = [];
  }
  return error;
};

const getColumnParity = (input) => {
  let error = 0;
  let temp = [];
  let parityBit;
  let i;
  let j;

  for (j = 0; j < 9; j++) {
    for (i = 0; i < 4; i++) {
      temp.push(input[i][j]);
    }
    parityBit = generateParity(temp);
    if (parityBit !== parseInt(input[i][j])) error++;
    temp = [];
  }
  return error;
};

const twoDimensionalParityCheck = (input) => {
  const word = removeSpaces(input);

  let isValid = word.length === 45 && isBinary(word);

  if (!isValid) {
    return 'Invalid Input';
  }

  let data = convertToArray(word);
  let cParity = getColumnParity(data);
  let rParity = getRowParity(data);

  let error = cParity >= rParity ? cParity : rParity;

  const output = 'Error Count: ' + error;

  return output;
};

export default twoDimensionalParityCheck;
