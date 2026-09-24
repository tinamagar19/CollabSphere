const pool = require('../config/db');

const addCollaborator = async (req, res) => {
  const { project_id, user_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO collaborators (project_id, user_id) VALUES (?, ?)',
      [project_id, user_id]
    );
    res.status(201).json({ message: 'Collaborator added successfully', collaboratorId: result.insertId });
  } catch (error) {
    console.error('Error adding collaborator:', error);
    res.status(500).json({ error: 'Failed to add collaborator', details: error.message });
  }
};

const getProjectCollaborators = async (req, res) => {
  const { projectId } = req.params;
  try {
    const [rows] = await pool.query(
      `SELECT c.id, c.project_id, c.user_id, u.username, u.email 
       FROM collaborators c 
       JOIN users u ON c.user_id = u.id 
       WHERE c.project_id = ?`, 
      [projectId]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching collaborators:', error);
    res.status(500).json({ error: 'Failed to fetch collaborators', details: error.message });
  }
};

module.exports = {
  addCollaborator,
  getProjectCollaborators
};
