const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const app = express();

router.post('/create-task', async (req, res) => {

    try {
        const task = new Task({
            description: req.body.description,
            completed: false
        });
        task.save();
        res.status(201);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;