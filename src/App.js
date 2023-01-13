import logo from './logo.svg';
import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularStatic from './Progress.js'
import Progress from './Progress'

function App() {  

  return (
    <div className="App">
        <Progress />
    </div>
  );
}

export default App;
