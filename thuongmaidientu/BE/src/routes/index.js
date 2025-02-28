const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define routes
router.get('/items', controller.getItems);
router.post('/items', controller.createItem);
router.put('/items/:id', controller.updateItem);
router.delete('/items/:id', controller.deleteItem);

module.exports = router;