const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const app = express();

router.post('/create-task', async (req, res) => {

    try {
        res.status(201).send('enviando datos...');
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;