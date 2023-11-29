import React from "react";
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
    return (React.createElement("div", { style: divStyle },
        React.createElement("img", { style: style, src: imagePath, alt: "Your Image" })));
};
export default MyImageComponent;
