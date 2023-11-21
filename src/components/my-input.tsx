import React from "react";

// just some regular React component
const MyInputComponent = (props) => {
  const { record, property } = props;

  const imagePath = "http://localhost:3000/" + record.params['image'];

  const style = {
    borderRadius: "15px",
    height: "70px",
  };

  // return <img style={style} src="https://source.unsplash.com/featured/300x203" alt="Your Image" />
  return <img style={style} src={imagePath} alt="Your Image" />;
};

export default MyInputComponent;
