const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });
const { uploadBulkPhotos } = require("../controller/upload");

router.post("/", upload.array("photos"), uploadBulkPhotos);

module.exports = router;
