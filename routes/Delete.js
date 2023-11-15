const express = require('express');
const Task = require('../Model/Task');
const router = express.Router();
router.delete('/', async (req, res) => {
    const { taskId } = req.body;
    try {
        const task = await Task.findById(taskId);
        if (task.bucketId === 2) {
            await Task.findByIdAndDelete(taskId);

            res.status(200).json({
                data: [],
                error: null,
                message: "Task deleted"
            })
        } else (
            res.status(200).json({
                data: [],
                error: "",
                message: "unable to delete the task"
            })
        )
    }
    catch (err) {
        res.status(500).json({
            data: [],
            err: err,
            message: "cannot be deleted"
        });
    }
});
module.exports = router;