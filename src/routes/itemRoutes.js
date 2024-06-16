const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.get('/items', authMiddleware, itemController.getItems);
router.get('/items/:id', authMiddleware, itemController.getItem);
router.post('/items', authMiddleware, itemController.createItem);
router.put('/items/:id', authMiddleware, itemController.updateItem);
router.delete('/items/:id', authMiddleware, itemController.deleteItem);

module.exports = router;
