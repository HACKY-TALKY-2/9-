const express = require("express");
const gathering = require("../controllers/gathering");

const router = express.Router();

router.post("/create", gathering.createGathering);

router.get("/challenge", gathering.getChallengeGathering);

router.get("/hobby", gathering.getHobbyGathering);

router.get("/info/:id", gathering.getGatheringInfo);

router.get("/category", gathering.getCategory);

router.get("/notice/:gathering_id", gathering.getGatheringNotice);

router.get("/totalattend", gathering.getTotalAtthend);

//router.post("/post", gathering.postGatheringPost);

//router.get("/best_user/:gathering_id", gathering.getBestUser);

//router.get("/recentattendcount/:gathering_id", gathering.getRecentTotalAttend);

//router.post("/postofactivity", gathering.getPostOfActivity);

module.exports = router;
