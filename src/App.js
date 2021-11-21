import { useState } from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@material-ui/core';
import {
  CheckSum,
  CRC,
  SimpleParityCheck,
  TwoDimensionalParityCheck,
} from './components';

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  function handleChange(_, newValue) {
    setActiveTab(newValue);
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ margin: '4em 0 2em' }}>
        <Typography variant="h3" fontWeight={700}>
          ⚠️ Error Detection Techniques ⚠️
        </Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 4,
          backgroundColor: 'white',
          boxShadow:
            'rgba(136, 153, 166, 0.25) 0 0 15px, rgba(136, 153, 166, 0.15) 0 0 3px 1px',
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} variant="scrollable" onChange={handleChange}>
            <Tab label="Simple Parity Check" />
            <Tab label="Two-dimensional Parity Check" />
            <Tab label="Checksum" />
            <Tab label="Cyclic Redundancy Check" />
          </Tabs>
        </Box>
        <Box sx={{ p: '3em' }}>
          {activeTab === 0 && <SimpleParityCheck />}
          {activeTab === 1 && <TwoDimensionalParityCheck />}
          {activeTab === 2 && <CheckSum />}
          {activeTab === 3 && <CRC />}
        </Box>
      </Box>
      <Box sx={{ m: '2em 0' }}>
        <Typography>
          Source Code:{' '}
          <a
            class="link"
            href="https://github.com/justinpo/labex6"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/justinpo/labex6
          </a>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
