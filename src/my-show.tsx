import React from "react";

// just some regular React component
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
    fontSize : '22px',
    margin: '30px auto',
    display : "flex",
    justifyContent : "center",
    alignCenter : "center"
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',

  };

  const listDiv = {
    display : 'flex',
    justifyContent : 'space-evenly',
    alignItems : 'center'
  }

  const listItemStyle = {
    marginBottom: '10px',
  };

  localStorage.setItem("props", JSON.stringify(record.params))
  const user = record.params

  return (
    <>
    <div style={divStyle}>
      <img style={style} src={imagePath} alt="Your Image" />
    </div>
    <div style={containerStyle}>
    <h2 style={headingStyle}>Personal Details:</h2>
    <ul style={listStyle}>
        <div style={listDiv}>
      <li style={listItemStyle}><b>Name:</b> {user.fullName}</li>
      <li style={listItemStyle}>Age: 21</li>
      <li style={listItemStyle}>Gender: Male</li>
        </div>
        <div style={listDiv}>
      <li style={listItemStyle}>Date of Birth: September 12, 2002</li>
      <li style={listItemStyle}>Blood Group: B+</li>
      <li style={listItemStyle}>Marital Status: Unmarried</li>
        </div>
    </ul>

    <h2 style={headingStyle}>Contact Information:</h2>
    <ul>
      <li>Address: Airoli Sector 3, Navi Mumbai - 400607</li>
      <li>Phone: 8857822354</li>
      <li>Email: ajay.kharat@antllp.com</li>
      <li>WhatsApp: 8857822354</li>
    </ul>

    <h2 style={headingStyle}>Family Details:</h2>
    <ul>
      <li>Father's Name: Ganesh Kharat</li>
      <li>Mother's Name: Alive</li>
      <li>Total Siblings: 2</li>
      <ul>
        <li>Brothers: Unmarried (2)</li>
        <li>Sisters: Unmarried (0)</li>
      </ul>
    </ul>

    <h2 style={headingStyle}>Occupation and Education:</h2>
    <ul>
      <li>Job: Software Developer</li>
      <li>Company: Millennium Business Park</li>
      <li>Education: SSC</li>
    </ul>

    <h2 style={headingStyle}>Other Details:</h2>
    <ul>
      <li>Height: 6 feet</li>
      <li>Weight: 65 kg</li>
      <li>Physique: Average</li>
      <li>Income: Above 20 Lakh per annum</li>
      {/* Add other details here */}
    </ul>

    <h2 style={headingStyle}>Preferences and Expectations:</h2>
    <ul>
      <li>Partner Outside Mumbai: No</li>
      <li>Sub Caste Preferred: No</li>
      <li>Physically Challenged: No</li>
      <li>Other Expectations: Need to earn more than 10 LPA</li>
    </ul>

    <h2 style={headingStyle}>Security Information:</h2>
    <ul>
      <li>Password: Ajay@123</li>
    </ul>

    <h2 style={headingStyle}>Subscription Details:</h2>
    <ul>
      <li>Subscription Start Date: November 8, 2023</li>
      <li>Subscription End Date: November 6, 2024</li>
    </ul>

    <h2 style={headingStyle}>Status:</h2>
    <ul>
      <li>Payment Status: Successful</li>
      <li>Account Status: Active</li>
      <li>Role: Admin</li>
    </ul>
  </div>
  </>
  );
};

export default MyShowComponent;
