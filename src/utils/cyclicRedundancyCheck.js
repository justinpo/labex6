import { isBinary } from '.';

const binaryOr = (str1, str2) => {
  let output = '';
  for (var i = 1; i < 4; i++) {
    if (str1[i] === str2[i]) {
      output += '0';
    } else {
      output += '1';
    }
  }
  return output;
};

const divideCrc = (dividend) => {
  let divisor;
  let remainder = dividend.substring(0, 3);

  for (var i = 3; i < 7; i++) {
    remainder += dividend[i];

    divisor = remainder[0] === '1' ? '1011' : '0000';
    remainder = binaryOr(remainder, divisor);
  }

  return remainder;
};

const cyclicRedundancyCheck = (input) => {
  let isValid = input.length === 7 && isBinary(input);

  if (!isValid) {
    return 'Invalid Input';
  }

  let output;
  let remainder = divideCrc(input);

  if (remainder === '000') {
    output = 'Accept Data';
  } else {
    output = 'CRC error detected';
  }

  return output;
};

export default cyclicRedundancyCheck;
