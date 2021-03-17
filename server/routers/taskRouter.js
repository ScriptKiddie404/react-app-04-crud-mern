const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const app = express();

router.get('/', async (req, res) => {
    const task = new Task({
        description: "Valer verga",
        completed: false
    });
    try {
        await task.save();
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;