const express = require('express');
const Task = require('../Model/Task');
const User = require('../Model/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { taskTitle, bucketId, priority } = req.body;
    const userId = req.user.id;
    try {
        const newTask = new Task({
            task: taskTitle,
            bucketId: bucketId,
            priority: priority,
            userId: userId
        });
        await newTask.save();

        res.status(201).json({
            data: newTask,
            err: null,
            message: "task is created"
        })
    } catch (err) {
        res.status(500).json({
            data: [],
            err: err,
            message: "can't create"
        });
    }
});

module.exports = router;