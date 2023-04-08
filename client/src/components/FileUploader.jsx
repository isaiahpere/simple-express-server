import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "./FileUploader.module.css";

const FileUploader = () => {
  const [addedPhotos, setAddedPhotos] = useState([]);

  // useEffect(() => {
  //   const hitBackend = async () => {
  //     const { data } = await axios.get("/dogs");
  //     console.log(data);
  //   };
  //   hitBackend();
  // }, []);

  // handle bulk upload
  const handlePhotoUpload = (e) => {
    e.preventDefault();

    let files = e.target.files;
    let data = new FormData();

    const filesArray = Array.from(files);
    filesArray.forEach((file) => {
      data.append("photos", file);
    });

    setAddedPhotos(filesArray);
  };

  // hanle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("form login here");

    await axios.post("/upload");
  };

  // console.log(state photos)
  console.log("added photos are: ");
  console.log(addedPhotos);

  return (
    <div className={styles.section}>
      <h1>Image Uploader</h1>
      <form onSubmit={handleFormSubmit}>
        <label className={styles.inputContainer}>
          <input type="file" multiple onChange={handlePhotoUpload} />
          <div>UPLOAD</div>
        </label>
        <button>Add photos</button>
      </form>
    </div>
  );
};

export default FileUploader;
