import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        О компании
      </Typography>
      <p>Компания "ТехноСистемы" — ведущий разработчик программного обеспечения в сфере IT, специализирующийся на решениях для автоматизации торговли и управления коммерческими процессами. Наша команда состоит из высококвалифицированных специалистов, которые имеют богатый опыт в создании и внедрении инновационных программных решений для различных торговых точек.</p>

      <p>Мы предоставляем полный спектр услуг, включая разработку программного обеспечения для кассовых аппаратов, терминалов, банкоматов и систем управления товарными запасами. Наша миссия — помочь клиентам оптимизировать их бизнес-процессы и повысить эффективность работы за счет использования современных технологий.</p>

      <p>С момента своего основания, мы стремимся к совершенству, постоянно обновляя и улучшая наши продукты в соответствии с последними тенденциями рынка. Мы гордимся тем, что наши решения уже используются в различных отраслях, включая розничную торговлю, ресторанный бизнес, услуги и финансовый сектор.</p>

      <p>Мы понимаем, что успех наших клиентов — это и наш успех, поэтому стараемся создать такие программные продукты, которые не только удовлетворяют потребности бизнеса, но и делают работу наших клиентов более комфортной и эффективной. С нами вы можете быть уверены в высоком качестве и надежности наших услуг.</p>

      <p>Если вы ищете партнера, который поможет вам в автоматизации вашего бизнеса и обеспечении конкурентных преимуществ, компания "ТехноСистемы" готова предложить вам лучшие решения!</p>
    </Box>
  );
};

export default AboutPage;