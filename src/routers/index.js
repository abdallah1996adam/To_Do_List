const { response } = require("express");
const express = require("express");
const router = express.Router();
const listController = require("../contorelles/listController");

router.get("/", listController.findAll);
router.get("/list/:id", listController.findOne);
router.post("/list",listController.addOne )

module.exports = router;
