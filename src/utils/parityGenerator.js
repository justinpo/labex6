function parityGenerator(word) {
  let oneSum = 0;
  for (let i of word) {
    if (i === '1') oneSum++;
  }
  return oneSum % 2;
}

export default parityGenerator;
