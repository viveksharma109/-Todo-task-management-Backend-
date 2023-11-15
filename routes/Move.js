const express = require('express');
const Task = require('../Model/Task');
const router = express.Router();
router.post('/', async (req, res) => {
    const {bucketId,taskId} = req.body;
    try{
      const movetask = await Task.findByIdAndUpdate(taskId,{bucketId:bucketId});
      const movedId = await Task.findById(taskId);
      res.status(200).json({
        data:movedId,
        err: null,
        message: "Task found"
      })

    } catch(err) {
        res.status(500).json({ 
            data:[],
            err :err,
            message:"unable to move"
         });
      }
});
module.exports = router;