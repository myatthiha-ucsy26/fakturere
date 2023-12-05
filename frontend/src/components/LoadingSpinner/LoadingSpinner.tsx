// react
import React from 'react';
// mui
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress  />
    </Box>
  );
};

export default LoadingSpinner;
