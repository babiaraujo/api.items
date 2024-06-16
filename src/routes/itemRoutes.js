const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Item management endpoints
 */

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Retrieve a list of items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/items', itemController.getItems);

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Retrieve a single item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     responses:
 *       200:
 *         description: A single item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Item not found
 */
router.get('/items/:id', itemController.getItem);

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Item name
 *               category:
 *                 type: string
 *                 example: Item category
 *               price:
 *                 type: number
 *                 example: 100
 *     responses:
 *       201:
 *         description: Item created successfully
 *       500:
 *         description: Error creating item
 */
router.post('/items', itemController.createItem);

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Update an existing item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated item name
 *               category:
 *                 type: string
 *                 example: Updated item category
 *               price:
 *                 type: number
 *                 example: 150
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Error updating item
 */
router.put('/items/:id', itemController.updateItem);

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Delete an item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     responses:
 *       204:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Error deleting item
 */
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
