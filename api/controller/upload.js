/**
 *
 * uploads images to cloudinary
 */
const uploadBulkPhotos = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  console.log("hit bulk load");
  res.json("you hit bulk upload endpoint");
};

module.exports = {
  uploadBulkPhotos,
};
