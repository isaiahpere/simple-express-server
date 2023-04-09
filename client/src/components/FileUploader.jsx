import React, { useState } from "react";

import axios from "axios";

import styles from "./FileUploader.module.css";

const FileUploader = () => {
  const [addedPhotos, setAddedPhotos] = useState([]);

  // handle bulk upload
  const handlePhotoUpload = async (e) => {
    e.preventDefault();

    let files = e.target.files;

    const data = new FormData();

    const dataArray = Array.from(files);
    dataArray.forEach((file) => {
      console.log("the file in array foreach is: ");
      console.log(file);
      data.append("photos", file);
    });

    // make request to send to api
    const { data: fileNames } = await axios.post("/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setAddedPhotos(fileNames);
  };

  return (
    <div className={styles.section}>
      <h1>Image Uploader</h1>
      <label className={styles.inputContainer}>
        <input type="file" multiple onChange={handlePhotoUpload} />
        <div>UPLOAD</div>
      </label>
      {addedPhotos && addedPhotos.length > 0 && (
        <>
          <h2>Images From Cloudinary</h2>
          <div className={styles.images}>
            {addedPhotos.map((photo) => (
              <div key={photo.url}>
                <img src={photo.url} alt="" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
