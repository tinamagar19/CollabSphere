const axios = require('axios');

async function testCreateTask() {
  try {
    const response = await axios.post('http://localhost:3000/api/tasks', {
      title: 'Design UI Layout',
      description: 'Create frontend wireframes and components',
      projectId: 1
    });
    console.log('SUCCESS:', response.data);
  } catch (error) {
    console.error('ERROR:', error.response ? error.response.data : error.message);
  }
}

testCreateTask();