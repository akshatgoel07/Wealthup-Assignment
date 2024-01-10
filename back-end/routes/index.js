const express = require("express");
const router = express.Router();

const code = require("./code.route");

router.use("/codes", code);

module.exports = router;
