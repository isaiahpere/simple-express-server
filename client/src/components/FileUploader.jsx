import React, { useEffect } from "react";

import axios from "axios";

const FileUploader = () => {
  useEffect(() => {
    const hitBackend = async () => {
      const { data } = await axios.get("/dogs");
      console.log(data);
    };
    hitBackend();
  }, []);

  return <div>FileUploader</div>;
};

export default FileUploader;
