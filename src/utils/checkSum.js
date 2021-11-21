import { addBinary, isBinary, removeSpaces } from '.';

const separate = (input) => {
  let output = [];
  for (let i = 0; i < 5; i++) {
    output.push(input.substring(i * 8, i * 8 + 8));
  }
  return output;
};

const getComplement = (binary) => {
  let complement = '';
  for (let i = 0; i < binary.length; i++) {
    complement += binary[i] === '1' ? '0' : '1';
  }
  return complement;
};

const getSum = (input) => {
  let temp = [];
  let currentAns = input[0];
  for (let i = 1; i < 5; i++) {
    temp = addBinary(currentAns, input[i]);
    if (temp.length === 9) {
      currentAns = addBinary(temp.substring(1), '1');
    } else {
      currentAns = temp;
    }
  }

  return currentAns;
};

const checkSum = (input) => {
  const word = removeSpaces(input);

  const isValid = word.length === 40 && isBinary(word);

  if (!isValid) {
    return 'Invalid Input';
  }

  const data = separate(word);
  const sum = getSum(data);
  const complement = getComplement(sum);

  if (complement === '00000000') {
    return 'Accept Data';
  } else {
    return 'Checksum error detected';
  }
};

export default checkSum;
