const express = require('express');
const router = express.Router();
const userController = require('c:/Users/63945/Desktop/finalExam/controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// POST create user
router.post('/', userController.createUser);

// PUT update user
router.put('/:id', userController.updateUser);

// DELETE delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;
