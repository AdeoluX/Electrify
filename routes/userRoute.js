const express = require("express");
const router = express.Router();
const { uploadMusic, deleteMusic, allMySongs } = require("../handlers");
const { protect } = require("../middleware/protect");

router.post("/upload", protect, uploadMusic);
router.get("/mySongs", protect, allMySongs);
router.post("/delete", deleteMusic);

module.exports = router;
