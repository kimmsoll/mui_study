import { CircularProgress, LinearProgress } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useEffect, useState } from 'react';

const ProgressComponent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Box sx={{ width: '20%' }}>
        <LinearProgress />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color='secondary' />
      </Box>
      <Stack spacing={2} direction='row'>
        <CircularProgress variant='determinate' value={25} />
        <CircularProgress variant='determinate' value={50} />
        <CircularProgress variant='determinate' value={75} />
        <CircularProgress variant='determinate' value={100} />
        <CircularProgress variant='determinate' value={progress} />
      </Stack>
    </>
  );
};

export default ProgressComponent;
