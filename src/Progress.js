import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex',}}>
      <CircularProgress variant="determinate" {...props} size="15rem"/>
      <Box
        sx={{
          color: 'blue',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize: 25, color: 'blue'}}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {

  const [progress, setProgress] = React.useState(0);
  const [array, setArray] = useState([])

    const handleClick = () => {
        array.push("thanks")
        setArray(array)
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    };
    
    if(array.length === 11) {
        setArray([])
    };

  return (
    <div>
        <CircularProgressWithLabel value={progress} sx={{color: 'blue'}}/>
        <button onClick={handleClick}>Click</button>
        <p>{JSON.stringify(array)}</p>
    </div>
  );
}