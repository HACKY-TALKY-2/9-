const express = require("express");
const gathering = require("../controllers/gathering");

const router = express.Router();

router.post("/create", gathering.createGathering);

router.get("/challenge", gathering.getChallengeGathering);

router.get("/hobby", gathering.getHobbyGathering);

router.get("/info/:id", gathering.getGatheringInfo);

module.exports = router;
