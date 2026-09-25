const pool = require('../config/db');

const addComment = async (req, res) => {
  const { text, user_id, task_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO comments (text, user_id, task_id) VALUES (?, ?, ?)',
      [text, user_id, task_id]
    );
    res.status(201).json({ message: 'Comment added successfully', commentId: result.insertId });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Failed to add comment', details: error.message });
  }
};

const getCommentsByTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM comments WHERE task_id = ? ORDER BY created_at ASC',
      [taskId]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments', details: error.message });
  }
};

module.exports = {
  addComment,
  getCommentsByTask
};
