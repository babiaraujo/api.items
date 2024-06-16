const Item = require('../models/itemModel');

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find()
            res.json(items)

    } catch (err) {
        res.status(500).json({error: 'An error occurred'})

    }
}

exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({error: 'An error occurred'})
    }
}