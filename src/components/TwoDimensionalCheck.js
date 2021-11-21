import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { twoDimensionalCheck } from '../utils';

function TwoDimensionalCheck() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function onCheck() {
    const result = twoDimensionalCheck(input);
    setOutput(result);
  }

  return (
    <form className="group">
      <TextField
        label="Input (45 bits)"
        value={input}
        variant="outlined"
        onChange={onInputChange}
      />
      <Button size="large" variant="contained" onClick={onCheck}>
        Check
      </Button>
      {output && (
        <TextField label="Output" multiline maxRows={6} value={output} />
      )}
    </form>
  );
}

export default TwoDimensionalCheck;
