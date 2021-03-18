const express = require('express');
const Task = require('../models/Task');
const router = new express.Router();

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
        const tasks = await Task.find({});
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
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.delete('/delete-task/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const task = await Task.findOneAndDelete(id);
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: errror.message });
    }
});

module.exports = router;