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
  const handlePhotoUpload = async (e) => {
    e.preventDefault();

    let files = e.target.files;
    console.log("fiels");
    console.log(files);
    const data = new FormData();

    console.log("############# ");
    console.log(data);
    console.log("############# ");

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

    console.log("*******");
    console.log(fileNames);
    console.log("*******");

    // setAddedPhotos(filesArray);
  };

  // hanle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("form login here");

    await axios.post("/upload", { test: "test body" });
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
