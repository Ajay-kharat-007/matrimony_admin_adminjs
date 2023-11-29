import React from "react";

// just some regular React component
const MyDashboardComponent = (props) => {
  const { record, property } = props;

  const style = {
    width: "100%",
    height: "100%",
    // backgroundColor: "black",
    // color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={style}>
        <div>
            <img src="https://matrimony-admin.onrender.com/vaisha-vani-logo.png" alt="धर्मादाय संस्था" />
        </div>
      </div>
    </>
  );
};

export default MyDashboardComponent;
