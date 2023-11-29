import React from "react";

// just some regular React component
const MyImageComponent = (props) => {
  const { record, property } = props;

  const imagePath = "https://matrimony-admin.onrender.com/" + record.params["image"];

  const style = {
    borderRadius: "15px",
    margin: "20px auto",
    width: "350px",
    height: "auto",
  };

  const divStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // return <img style={style} src="https://source.unsplash.com/featured/300x203" alt="Your Image" />

  return (
    <div style={divStyle}>
      <img style={style} src={imagePath} alt="Your Image" />
    </div>
  );
};

export default MyImageComponent;
