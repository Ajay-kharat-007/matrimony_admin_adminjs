import React from "react";
const MyImageComponent = (props) => {
    const { record, property } = props;
    const imagePath = "http://localhost:5001/" + record.params['image'];
    const style = {
        borderRadius: "15px",
        width: "350px",
        height: "auto",
    };
    return React.createElement("img", { style: style, src: imagePath, alt: "Your Image" });
};
export default MyImageComponent;
