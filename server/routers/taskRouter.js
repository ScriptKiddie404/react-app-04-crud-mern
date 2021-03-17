const express = require('express');
const Task = require('../models/Task');
const router = new express.Router();
// const app = express();

router.post('/create-task', async (req, res) => {

    const task = new Task({
        description: req.body.description
    });

    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


module.exports = router;