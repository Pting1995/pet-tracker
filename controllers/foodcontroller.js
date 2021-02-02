var express = require('express');

var router = express.Router();

var food = require('../models/food.js');

// get existing food
router.get('/', (req, res) => {
    food.all((data) => {
        var foodObj = {
            food: data,
        };
        console.log(foodObj);
        res.render('index', foodObj);
    });
});

// new food
router.post('/api/food', (req, res) => {
    food.create(['name', 'eaten'], [req.body.name, req.body.eaten], (result) => {
        res.json({ id: result.insertId });
    });
});

// update food
router.put('/api/food/:id', (req, res) => {
    var condition = `id = ${req.params.id}`;
    food.update(condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;