const express = require("express");
const voterController = require("../controllers/voterController")
const router = express.Router();

// routes

router.get("/signUp", voterController.validateVoter,voterController.signUp);

router.post("/login", voterController.validateToken, voterController.login); 

router.post("/voteNow/:name",voterController.validateVoter,voterController.voteNow);

router.put("/voteNow/:name",voterController.validateVoter,voterController.voteNow);

router.get("/summary",voterController.summary);

router.get("/",voterController.allData);

router.put("/:name/:phone", voterController.update);

router.get("/info/:name", voterController.voterInfo);



module.exports = router;