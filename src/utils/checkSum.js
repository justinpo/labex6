import { addBinary, isBinary, removeSpace } from '.';

const separate = (message) => {
  let data = [];
  for (let i = 0; i < 5; i++) {
    data.push(message.substring(i * 8, i * 8 + 8));
  }
  return data;
};

const getComplement = (binary) => {
  let complement = '';
  for (let i = 0; i < binary.length; i++) {
    complement += binary[i] === '1' ? '0' : '1';
  }
  return complement;
};

const getSum = (data) => {
  let temp = [];
  let currentAns = data[0];
  for (let i = 1; i < 5; i++) {
    temp = addBinary(currentAns, data[i]);
    if (temp.length === 9) {
      currentAns = addBinary(temp.substring(1), '1');
    } else {
      currentAns = temp;
    }
  }

  return currentAns;
};

const checkSum = (input) => {
  let word = removeSpace(input);

  let isValid = word.length === 40 && isBinary(word);

  if (!isValid) {
    return 'Invalid Input';
  }

  let output;
  let data = separate(word);
  let sum = getSum(data);
  let complement = getComplement(sum);

  if (complement === '00000000') {
    output = 'Accept Data';
  } else {
    output = 'Checksum error detected';
  }

  return output;
};

export default checkSum;
