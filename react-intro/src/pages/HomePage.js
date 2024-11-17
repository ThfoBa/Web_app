import React from 'react';
import { Box, Typography} from '@mui/material';
import ImageSlider from '../components/ImageSlider'; // Импортируем слайдер

const HomePage = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Добро пожаловать в ТехноСистемы!
      </Typography>
      <Typography variant="h6" sx={{letterSpacing: '2px', fontSize: '20px' }}>
      Мы предлагаем инновационные решения в сфере автоматизации бизнеса. 
      Узнайте, как наши технологии могут помочь вашему бизнесу работать эффективнее!
      </Typography>
      <ImageSlider />
    </Box>
  );
};

export default HomePage;