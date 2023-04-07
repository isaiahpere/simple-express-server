import React from "react";
import axios from "axios";

import FileUploader from "./components/FileUploader";

// axios default settings
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  return <FileUploader />;
};

export default App;
