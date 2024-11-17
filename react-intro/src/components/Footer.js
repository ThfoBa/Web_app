import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#282c34', color: 'white', padding: 2, textAlign: 'center', marginTop: 'auto' }}>
      <Typography variant="body1">© 2024 ТехноСистемы. Все права защищены.</Typography>
    </Box>
  );
};

export default Footer;