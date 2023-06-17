const express = require('express');
const router = express.Router();

const orderController = require('c:/Users/63945/Desktop/finalExam/controllers/orderController');

router.get('/', orderController.getAllOrders);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
