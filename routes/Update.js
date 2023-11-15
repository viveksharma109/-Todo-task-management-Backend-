const express = require('express');
const Task = require('../Model/Task');
const router = express.Router();
router.put('/', async (req, res) => {
     const {task,priority,taskId} = req.body;
    try{
      const updatetask = await Task.findByIdAndUpdate(taskId , {task:task,priority:priority});
      const updatetaskId = await Task.findById(taskId);
      res.status(200).json({
        data:updatetaskId,
        err: null,
        message: "Task Updated "
      })
    } catch(err) {
        res.status(500).json({ 
            data:[],
            err :err,
            message:"unable to update !!"
         });
      }
});
module.exports = router;