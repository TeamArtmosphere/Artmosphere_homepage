import { Box, Paper } from '@mui/material';
import logo from '../assets/imgs/vertical_logo.png';
import React from 'react';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        borderBottom: '1px solid #e0e0e0',
        p: 0,
      }}
    >
      <Box sx={{ width: '1920px' }}>
        <Paper component={'img'} src={logo} alt='아트모스피어 로고' height={24} elevation={0} />
      </Box>
    </Box>
  );
};

export default Header;
