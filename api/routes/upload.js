const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });
const { uploadBulkPhotos } = require("../controller/upload");

// multer parses the files from req and uploads it to cloudinary
// then appends the path from cloudiary into the req.files
router.post("/", upload.array("photos", 25), uploadBulkPhotos);

module.exports = router;
