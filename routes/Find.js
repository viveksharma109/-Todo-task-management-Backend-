const express = require('express');
const Task = require('../Model/Task');
const router = express.Router();

router.get('/', async (req, res) => {
  const userId = req.user.id;
  try {
    const findtask = await Task.find({ userId: userId });
    res.status(200).json({
      data: findtask,
      err: null,
      message: "Task found"
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: [],
      err: err,
      message: "id does not exist"
    });
  }
});
module.exports = router;