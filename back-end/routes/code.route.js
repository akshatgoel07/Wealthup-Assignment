const router = require("express").Router();
const code = require("../controllers/code.controller");

router.get("/", code.addCode);
router.post("/use", code.findCode);

module.exports = router;
