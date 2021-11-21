import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { simpleParityCheck } from '../utils';

function SimpleParityCheck() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [output, setOutput] = useState('');

  function onFirstInputChange(e) {
    setFirstInput(e.target.value);
  }

  function onSecondInputChange(e) {
    setSecondInput(e.target.value);
  }

  function onCheck() {
    const result = simpleParityCheck(firstInput, secondInput);
    setOutput(result);
  }

  return (
    <form className="group">
      <TextField
        label="Input A (8 bits)"
        value={firstInput}
        variant="outlined"
        onChange={onFirstInputChange}
      />
      <TextField
        label="Input B (8 bits + Parity bit)"
        value={secondInput}
        variant="outlined"
        onChange={onSecondInputChange}
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

export default SimpleParityCheck;
