const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const app = express();

app.get('/', async (req, res) => {
    try {
        const task = new Task({

        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});