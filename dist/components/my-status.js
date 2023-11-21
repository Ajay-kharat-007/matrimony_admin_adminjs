import React from "react";
const MyStatusComponent = (props) => {
    const { record, property } = props;
    const style = {
        borderRadius: "15px",
        fontSize: "12px",
        padding: "8px 2px",
        border: "1px solid grey",
        alignText: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: record.params['status'] == "active" ? "green" : "red"
    };
    return React.createElement("h1", { style: style }, record.params[property.name].toUpperCase());
};
export default MyStatusComponent;
