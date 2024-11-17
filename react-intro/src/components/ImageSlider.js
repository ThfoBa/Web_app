import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const ImageSlider = () => {
  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Бесконечный цикл
    speed: 800, // Скорость анимации
    slidesToShow: 1, // Показывать один слайд за раз
    slidesToScroll: 1, // Прокручивать один слайд за раз
    autoplay: true, // Автопроигрывание
    autoplaySpeed: 5000, // Интервал автопроигрывания
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: 4 }}>
      <Slider {...settings}>
        <div>
          <img src="/images/1.png" alt="Slide 1" style={{ width: '100%', borderRadius: '8px', height: '500px', objectFit: 'cover' }} />
        </div>
        <div>
          <img src="/images/2.png" alt="Slide 2" style={{ width: '100%', borderRadius: '8px', height: '500px', objectFit: 'cover'  }} />
        </div>
        <div>
          <img src="/images/3.png" alt="Slide 3" style={{ width: '100%', borderRadius: '8px', height: '500px', objectFit: 'cover'  }} />
        </div>
      </Slider>
    </Box>
  );
};

export default ImageSlider;