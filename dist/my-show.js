import React from "react";
const MyShowComponent = (props) => {
    const { record, property } = props;
    const imagePath = "http://localhost:5001/" + record.params["image"];
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
    const containerStyle = {
        maxWidth: '100%',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
    const headingStyle = {
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        fontSize: '22px',
        margin: '30px auto',
        display: "flex",
        justifyContent: "center",
        alignCenter: "center"
    };
    const listStyle = {
        listStyleType: 'none',
        padding: '0',
    };
    const listDiv = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    };
    const listItemStyle = {
        marginBottom: '10px',
    };
    localStorage.setItem("props", JSON.stringify(record.params));
    const user = record.params;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: divStyle },
            React.createElement("img", { style: style, src: imagePath, alt: "Your Image" })),
        React.createElement("div", { style: containerStyle },
            React.createElement("h2", { style: headingStyle }, "Personal Details:"),
            React.createElement("ul", { style: listStyle },
                React.createElement("div", { style: listDiv },
                    React.createElement("li", { style: listItemStyle },
                        React.createElement("b", null, "Name:"),
                        " ",
                        user.fullName),
                    React.createElement("li", { style: listItemStyle }, "Age: 21"),
                    React.createElement("li", { style: listItemStyle }, "Gender: Male")),
                React.createElement("div", { style: listDiv },
                    React.createElement("li", { style: listItemStyle }, "Date of Birth: September 12, 2002"),
                    React.createElement("li", { style: listItemStyle }, "Blood Group: B+"),
                    React.createElement("li", { style: listItemStyle }, "Marital Status: Unmarried"))),
            React.createElement("h2", { style: headingStyle }, "Contact Information:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Address: Airoli Sector 3, Navi Mumbai - 400607"),
                React.createElement("li", null, "Phone: 8857822354"),
                React.createElement("li", null, "Email: ajay.kharat@antllp.com"),
                React.createElement("li", null, "WhatsApp: 8857822354")),
            React.createElement("h2", { style: headingStyle }, "Family Details:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Father's Name: Ganesh Kharat"),
                React.createElement("li", null, "Mother's Name: Alive"),
                React.createElement("li", null, "Total Siblings: 2"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Brothers: Unmarried (2)"),
                    React.createElement("li", null, "Sisters: Unmarried (0)"))),
            React.createElement("h2", { style: headingStyle }, "Occupation and Education:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Job: Software Developer"),
                React.createElement("li", null, "Company: Millennium Business Park"),
                React.createElement("li", null, "Education: SSC")),
            React.createElement("h2", { style: headingStyle }, "Other Details:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Height: 6 feet"),
                React.createElement("li", null, "Weight: 65 kg"),
                React.createElement("li", null, "Physique: Average"),
                React.createElement("li", null, "Income: Above 20 Lakh per annum")),
            React.createElement("h2", { style: headingStyle }, "Preferences and Expectations:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Partner Outside Mumbai: No"),
                React.createElement("li", null, "Sub Caste Preferred: No"),
                React.createElement("li", null, "Physically Challenged: No"),
                React.createElement("li", null, "Other Expectations: Need to earn more than 10 LPA")),
            React.createElement("h2", { style: headingStyle }, "Security Information:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Password: Ajay@123")),
            React.createElement("h2", { style: headingStyle }, "Subscription Details:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Subscription Start Date: November 8, 2023"),
                React.createElement("li", null, "Subscription End Date: November 6, 2024")),
            React.createElement("h2", { style: headingStyle }, "Status:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Payment Status: Successful"),
                React.createElement("li", null, "Account Status: Active"),
                React.createElement("li", null, "Role: Admin")))));
};
export default MyShowComponent;
