const express = require('express');
const router = express.Router();

const gameController = require('c:/Users/63945/Desktop/finalExam/controllers/gameController');

router.get('/', gameController.getAllGames);
router.post('/', gameController.createGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router;
