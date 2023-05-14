const express = require("express");
const voterController = require("../controllers/voterController")
const router = express.Router();

// routes

router.get("/signUp",voterController.signUp);

router.post("/voteNow/:name",voterController.validateVoter,voterController.voteNow);

router.get("/summary",voterController.summary);

router.get("/",voterController.allData);

router.put("/:name/:phone", voterController.update);

router.get("/info/:name", voterController.voterInfo);

module.exports = router;