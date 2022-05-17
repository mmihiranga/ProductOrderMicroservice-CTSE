const express = require('express');
const router = express.Router();
const OrderController = require('../controller/order.controller');

module.exports = function (){
    router.get('/', OrderController.getAllOrders);
    router.post('/create', OrderController.createOrder);
    router.put('/update/:id', OrderController.updateOrder);
    router.delete('/delete/:id', OrderController.deleteOrder);
    router.get('/:id', OrderController.getOrderById);
    return router;
}
