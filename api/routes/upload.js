const express = require("express");
const router = express.Router();
const { uploadBulkPhotos } = require("../controller/upload");

router.post("/", uploadBulkPhotos);

module.exports = router;
