import { isBinary } from '.';

function andBinary(str1, str2) {
  let ans = '';
  for (let i = 1; i < 4; i++) {
    if (str1[i] === str2[i]) ans += '0';
    else ans += '1';
  }
  return ans;
}

function crcDivision(dividend) {
  let divisor;
  let remainder = dividend.substring(0, 3);

  for (let i = 3; i < 7; i++) {
    remainder += dividend[i];

    divisor = remainder[0] === '1' ? '1011' : '0000';
    remainder = andBinary(remainder, divisor);

    return remainder;
  }
}

function cyclicRedundancyCheck(data) {
  let validity = data.length === 7 && isBinary(data);

  let message;

  if (validity) {
    let remainder = crcDivision(data);

    if (remainder === '000') {
      message = 'Accept Data';
    } else {
      message = 'CRC error detected';
    }
  } else {
    message = 'Invalid Input.';
  }

  return message;
}

export default cyclicRedundancyCheck;
