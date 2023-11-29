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
        const response = await fetch("https://matrimony-admin.onrender.com/importUser", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully!", props);
          location.href = 'https://matrimony-admin.onrender.com'+props.resource.href
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

  const butonStyle = {
    padding : '10px',
    border : '2px solid black',
    borderRadius: '15px',
    backgroundColor : 'rgb(131, 216, 252)',
    color : 'black'
  }

  const divStyle = {
    display : 'flex',
    justifyContent : 'space-evenly'
  }

  return (
    <>
    <div style={divStyle}>
      <input type="file" name="not" id="not" onChange={handleFileChange} />
      <button style={butonStyle} onClick={handleUpload}>Upload csv file</button>
    </div>
    </>
  );
};

export default MyInputComponent;
