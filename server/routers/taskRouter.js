const express = require('express');
const Task = require('../models/Task');
const router = new express.Router();
const app = express();

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


router.get('/get-tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.put('/edit-task', async (req, res) => {
    const { id, taskName } = req.body;
    try {
        const task = await Task.findById(id);
        task.description = taskName;
        await task.save();
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;