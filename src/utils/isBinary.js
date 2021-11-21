const isBinary = (string) => {
  for (let char of string) {
    if (char !== '0' && char !== '1') return false;
  }

  return true;
};

export default isBinary;
