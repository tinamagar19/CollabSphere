const pool = require('../config/db');

const createTask = async (req, res) => {
  const { title, description, projectId } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, description, status, projectId) VALUES (?, ?, ?, ?)',
      [title, description || 'pending', 'pending', projectId]
    );
    res.status(201).json({ message: 'Task created successfully', taskId: result.insertId });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task', details: error.message });
  }
};

const getTasksByProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE projectId = ?', [projectId]);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks', details: error.message });
  }
};

module.exports = {
  createTask,
  getTasksByProject
};