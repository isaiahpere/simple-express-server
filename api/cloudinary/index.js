const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

console.log(`cloudinary_api ${process.env.CLOUDINARY_KEY}`);

// config cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// config multer cloudinary storage instance
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "express-server",
    allowed_formats: ["jpeg", "jpg", "png", "webp"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
