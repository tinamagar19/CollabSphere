const pool = require('../config/db');

const createProject = async (req, res) => {
  const { title, description, user_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO projects (title, description, user_id) VALUES (?, ?, ?)',
      [title, description, user_id]
    );
    res.status(201).json({ message: 'Project created successfully', projectId: result.insertId });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project', details: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
  }
};

module.exports = {
  createProject,
  getProjects
};
