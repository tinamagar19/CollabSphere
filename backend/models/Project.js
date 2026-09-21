const pool = require('../config/db');

const createProjectTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      description TEXT,
      user_id INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `;
  try {
    await pool.query(query);
    console.log('Projects table initialized.');
  } catch (error) {
    console.error('Error creating projects table:', error);
  }
};

module.exports = { createProjectTable };
