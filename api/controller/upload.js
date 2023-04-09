/**
 *
 * gets image info coming from multer to parse and upload image cloudinary url to mongodb
 */
const uploadBulkPhotos = (req, res) => {
  // map req.files to extract cloudinary image data
  if (req.files && req.files.length > 0) {
    const filesArray = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    console.log("-------------------------------------");
    // files
    console.log(filesArray);
    console.log("-------------------------------------");

    res.send(filesArray);
  } else {
    res.json("no files saved");
  }
};

module.exports = {
  uploadBulkPhotos,
};
