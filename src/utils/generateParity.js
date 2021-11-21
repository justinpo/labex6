const generateParity = (string) => {
  let oneSum = 0;
  for (let char of string) {
    if (char === '1') oneSum++;
  }
  return oneSum % 2;
};

export default generateParity;
