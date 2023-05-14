const express = require("express");
const vController = require("../controller/vcontroller");
const auth = require("../middleware/auth");
const router = express.Router();


router.post("/:name", auth.validateVoter, vController.saveVoter);






module.exports = router;