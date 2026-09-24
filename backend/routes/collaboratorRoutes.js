const express = require('express');
const router = express.Router();
const { addCollaborator, getProjectCollaborators } = require('../controllers/collaboratorController');

router.post('/', addCollaborator);
router.get('/:projectId', getProjectCollaborators);

module.exports = router;
