import React from "react";
const MyInputComponent = (props) => {
    const { record, property } = props;
    const imagePath = "http://localhost:3000/" + record.params['image'];
    const style = {
        borderRadius: "15px",
        height: "70px",
    };
    return React.createElement("img", { style: style, src: imagePath, alt: "Your Image" });
};
export default MyInputComponent;
