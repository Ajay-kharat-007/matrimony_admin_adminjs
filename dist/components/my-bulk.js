import React from "react";
const MyInputComponent = (props) => {
    const { record } = props;
    var files;
    const handleFileChange = (e) => {
        files = e.target.files[0];
        console.log(files);
    };
    const handleUpload = async () => {
        const file = files;
        if (file) {
            console.log(file);
            const formData = new FormData();
            formData.append("file", file);
            try {
                const response = await fetch("http://localhost:3000/importUser", {
                    method: "POST",
                    body: formData,
                });
                if (response.ok) {
                    console.log("File uploaded successfully!", props);
                    location.href = 'http://localhost:3000' + props.resource.href;
                }
                else {
                    console.error("File upload failed!");
                }
            }
            catch (error) {
                console.error("Error uploading file:", error);
            }
        }
        else {
            console.warn("No file selected");
        }
    };
    const butonStyle = {
        padding: '10px',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'rgb(131, 216, 252)',
        color: 'black'
    };
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-evenly'
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: divStyle },
            React.createElement("input", { type: "file", name: "not", id: "not", onChange: handleFileChange }),
            React.createElement("button", { style: butonStyle, onClick: handleUpload }, "Upload csv file"))));
};
export default MyInputComponent;
