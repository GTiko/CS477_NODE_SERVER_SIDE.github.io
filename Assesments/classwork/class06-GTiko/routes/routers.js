const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/", controllers.displayAllVoters);
router.post("/signUp", controllers.validateVoter, controllers.signUp);
router.post("/signIn", controllers.validateToken, controllers.signIn);
router.post("/voteNow", controllers.validateUser, controllers.voteNow);
router.put("/voteNow", controllers.validateUser, controllers.voteNow);

module.exports = router;
