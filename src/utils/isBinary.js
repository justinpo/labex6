function isBinary(word) {
  for (let i of word) {
    if (i !== '0' && i !== '1') return false;
  }

  return true;
}

export default isBinary;
