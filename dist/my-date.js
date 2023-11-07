import React from "react";
const MyDateComponent = (props) => {
    const { property, record } = props;
    const refId = record.params[property.path];
    const populated = record.populated[property.path];
    const value = (populated && populated.title) || refId;
    return React.createElement("input", null);
};
export default MyDateComponent;
