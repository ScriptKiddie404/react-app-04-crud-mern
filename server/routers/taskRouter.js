const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const app = express();

router.get('/', async (req, res) => {

    try {
        res.send('enviando datos...');
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;