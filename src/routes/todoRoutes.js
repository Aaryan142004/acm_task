const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const checkAuth = require('../middleware/auth');


router.use(checkAuth);
router.route('/').get(todoController.getTodo).post(todoController.postTodo).delete(todoController.deleteTodo);

// router.route('/:id');



module.exports = router;