import React from "react";

// just some regular React component
const MyStatusComponent = (props) => {
  const { record, property } = props;

  const style = {
    borderRadius: "15px",
    fontSize: "12px",
    padding : "8px 2px",
    border : "1px solid grey",
    alignText : "center",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    // backgroundColor: "grey",
    color : record.params['status']=="active"?"green":"red"
  };

//   return <img style={style} src={imagePath} alt="Your Image" />;
  return <h1 style={style}>{record.params['status'].toUpperCase()}</h1>
};

export default MyStatusComponent;
