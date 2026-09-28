const db = require('../config/db');

const createTaskTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status VARCHAR(50) DEFAULT 'pending',
      projectId INT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  try {
    await db.query(query);
  } catch (err) {
    console.error("Error creating tasks table:", err);
  }
};

createTaskTable();
module.exports = {};