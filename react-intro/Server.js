const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Подключение к базе данных SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Ошибка при подключении к базе данных:', err);
  } else {
    console.log('Подключение к базе данных установлено.');
  }
});

// Создание таблицы заказов, если её нет
db.run(`CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT
)`);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/orders', (req, res) => {
  const { name, email, service, message } = req.body;

  const query = `INSERT INTO orders (name, email, service, message) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, email, service, message], (err) => {
    if (err) {
      console.error('Ошибка при добавлении заказа в базу данных:', err);
      return res.status(500).json({ error: 'Ошибка при добавлении заказа' });
    }

    res.status(200).json({ message: 'Заказ успешно создан' });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});



