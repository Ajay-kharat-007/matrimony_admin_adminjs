import React from "react";

// just some regular React component
const MyImageComponent = (props) => {
  const { record, property } = props;

  const imagePath = "http://localhost:5001/" + record.params['image'];

  const style = {
    borderRadius: "15px",
    width : "350px",
    height: "auto",
  };

  // return <img style={style} src="https://source.unsplash.com/featured/300x203" alt="Your Image" />
  return <img style={style} src={imagePath} alt="Your Image" />;
};

export default MyImageComponent;
