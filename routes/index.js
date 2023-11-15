const express = require('express');
const create = require("./Create");
const Delete = require("./Delete");
const Move = require("./Move");
const Find = require("./Find");
const update = require("./Update");
const { verifyUser } = require("../middleware/index");

const router = express.Router();

router.use("/create", verifyUser, create);
router.use("/delete", verifyUser, Delete);
router.use("/move", verifyUser, Move);
router.use("/find", verifyUser, Find);
router.use("/update", verifyUser, update);

module.exports = router;