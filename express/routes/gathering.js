const express = require("express");
const gathering = require("../controllers/gathering");
const { isSignedIn } = require("../middlewares/auth");

const router = express.Router();

router.post("/create", isSignedIn, gathering.createGathering);

router.get("/challenge", gathering.getChallengeGathering);

router.get("/hobby", gathering.getHobbyGathering);

router.get("/info/:id", gathering.getGatheringInfo);

router.get("/category", isSignedIn, gathering.getCategory);

router.get("/notice/:gathering_id", gathering.getGatheringNotice);

router.post("/joingathering", isSignedIn, gathering.joinGathering);

//router.get("/totalattend", gathering.getTotalAtthend);

router.get("/totalattend/:gathering_id", gathering.getTotalAtthend);

router.get("/best_user/:gathering_id", gathering.getBestUser);

router.get("/recentattendcount/:gathering_id", gathering.getRecentTotalAttend);

router.post("/activity", isSignedIn, gathering.createActivity);

router.post("/postofactivity", isSignedIn, gathering.postPostOfActivity);

router.get("/postofactivity/:activity_id", gathering.getPostOfActivity);

router.get("/activity/:activity_id", gathering.getActivity);

router.get("/member/:gathering_id", gathering.getMember);

module.exports = router;
