const express = require('express');

const router = express.Router();

const food = require('../models/food.js');

router.get('/', (req, res) => {
    food.all((data) => {
        const foodObj = {
            food: data,
        };
        console.log(foodObj);
        res.render('index', foodObj);
    });
});

router.post('/api/food', (req, res) => {
    food.create(['name', 'eaten'], [req.body.name, req.body.eaten], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/food/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    food.update(
        {
            eaten: req.body.eaten,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;