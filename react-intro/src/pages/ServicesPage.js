import React, { useState } from 'react';
import emailjs from 'emailjs-com';  
import axios from 'axios';
import './ServicesPage.css'; 

const ServicesPage = () => {

  const services = [
    { id: 1, name: 'Разработка ПО', price: ' от 15000 руб' },
    { id: 2, name: 'Настройка оборудования', price: '3000 руб' },
    { id: 3, name: 'Техническая поддержка', price: '5000 руб/мес.' }
  ];

  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Обработка выбора услуги
  const handleOrderClick = (serviceName) => {
    setSelectedService(serviceName);
    setFormData({ ...formData, service: serviceName });
  };

  // Обработка изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработка отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/orders', formData);
    // Отправка формы через emailjs
    emailjs.sendForm('service_as8', 'template_d2i4y', event.target, 'bSjG-5iPBLz5')
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Ваш заказ принят, с вами свяжутся в ближайшее время!');
        setTimeout(() => {
          setSuccessMessage('');
          window.location.href = '/'; // Перенаправление на главную страницу
        }, 3000);
      }, (error) => {
        console.log(error.text);
        alert('Произошла ошибка при отправке заказа. Попробуйте снова.');
      });
  };
  
  return (
    <div className="services-page">
      <h1>Наши Услуги</h1>
      <table className="services-table">
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Цена</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>
                <button onClick={() => handleOrderClick(service.name)}>Заказать</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedService && (
        <form className="order-form" onSubmit={handleSubmit}>
          <h2>Оформление Заказа на "{selectedService}"</h2>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Услуга:
            <input
              type="text"
              name="service"
              value={formData.service}
              readOnly
            />
          </label>
          <label>
            Сообщение:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Заказать</button>
        </form>
      )}

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default ServicesPage;