import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1A237E', height: '60px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img 
                    src="/images/5.png" 
                    alt="Logo" 
                    style={{ width: '100px',height: '100px', marginRight: '1px' }} 
                />
                <Typography variant="h4" sx={{fontWeight: '1000', color: '#fff', letterSpacing: '2px', fontSize: '30px', textTransform: 'uppercase' }}>
                    ТехноСистемы
                </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button 
            component={Link} 
            to="/about" 
            variant="text" 
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#303F9F' } }}
          >
            О нас
          </Button>
          <Button 
            component={Link} 
            to="/services" 
            variant="text" 
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#303F9F' } }}
          >
            Услуги
          </Button>
          <Button 
            component={Link} 
            to="/contact" 
            variant="text" 
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#303F9F' } }}
          >
            Контакты
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;