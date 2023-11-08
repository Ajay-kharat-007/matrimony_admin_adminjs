import React from "react";
const MyDashboardComponent = (props) => {
    const { record, property } = props;
    const style = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: style },
            React.createElement("div", null,
                React.createElement("img", { src: "http://localhost:5001/vaisha-vani-logo.png", alt: "\u0927\u0930\u094D\u092E\u093E\u0926\u093E\u092F \u0938\u0902\u0938\u094D\u0925\u093E" })))));
};
export default MyDashboardComponent;
