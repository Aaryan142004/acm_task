
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { getTask, addTask, deleteTask } = require('../controllers/taskController')
const checkAuth = require('../middleware/auth'); 
// Get all tasks

router.route('/').get(taskController.getTask).post(taskController.addTask).delete(taskController.deleteTask);
// router.route('/:id').delete(taskController.deleteTask);




module.exports = router;