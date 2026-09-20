const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const pool = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CollabSphere API is running!');
});

app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    res.json({ message: 'Database connection successful!', result: rows[0].solution });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Database connection failed', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
