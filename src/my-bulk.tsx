import React from "react";
import { ActionProps } from "adminjs";

// just some regular React component
const MyInputComponent = (props: ActionProps) => {
  const { record } = props;

  var files;

  const handleFileChange = (e) => {
    files = e.target.files[0];
    console.log(files); // You can access file details here
  };

  const handleUpload = async () => {
    const file = files;

    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:5001/importUser", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully!", props);
          location.href = 'http://localhost:3000'+props.resource.href
        } else {
          console.error("File upload failed!");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.warn("No file selected");
    }
  };

  return (
    <>
      <input type="file" name="not" id="not" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
};

export default MyInputComponent;
