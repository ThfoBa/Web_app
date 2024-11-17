import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

const ContactPage = () => {
  const mapRef = useRef(null); 

  useEffect(() => {
    if (!mapRef.current) {
      const loadYandexMap = () => {
        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=a1fa1bec-ffeb-4909-a156-805619c69551&lang=ru_RU`;
        script.type = 'text/javascript';
        script.onload = () => {
          window.ymaps.ready(initMap);
        };
        document.head.appendChild(script);
      };

      const initMap = () => {
        if (!mapRef.current) {
          mapRef.current = new window.ymaps.Map('map', {
            center: [53.388935, 83.745505], // Координаты для Барнаула
            zoom: 15,
          });

          const myPlacemark = new window.ymaps.Placemark([53.388935, 83.745505], {
            balloonContent: `
                <strong>ТехноСистемы</strong><br/>
                Телефон: +7 (495) 123-45-67<br/>
                Электронная почта: info@technosystems.com<br/>
                Адрес: г. Барнаул, пр-кт Калинина, д. 116/44
              `,
            },
            {
              preset: 'islands#icon',
              iconColor: '#DC143C',
            }
          );

          mapRef.current.geoObjects.add(myPlacemark);
          
        }
      };

      loadYandexMap();
    }
  }, []); 

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Контакты
      </Typography>
      <Typography variant="body1" paragraph>
        Мы всегда рады помочь. Свяжитесь с нами!
      </Typography>
      <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
      <p><strong>Электронная почта:</strong> info@technosystems.com</p>
      <p><strong>Адрес:</strong> г. Барнаул, пр-кт Калинина, д. 116/44</p>
      <p><strong>График работы:</strong></p>
      <ul>
        <li>Пн - Пт: 09:00 - 18:00</li>
        <li>Сб: 10:00 - 15:00</li>
        <li>Вс: Выходной</li>
      </ul>
      <div id="map" style={{ height: '400px', marginTop: '20px' }}></div>
    </Box>
  );
};

export default ContactPage;