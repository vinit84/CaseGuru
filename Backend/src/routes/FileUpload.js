const express = require("express");
const router = express.Router();

const {localFileUpload} = require("../controller/fileupload");

router.post("/localFileUpload",localFileUpload);
// router.post("/imageUpload",imageUpload);
// router.post("/videoUpload",videoUpload);
// router.post("/imageReducerUpload",imageReducerUpload);

module.exports = router;
