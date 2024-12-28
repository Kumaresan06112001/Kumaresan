import React from "react";

const DisplayPage = ({ userDetails }) => {
  return (
    <div className="container">
      <h1>Submitted Details</h1>
      <p>
        <strong>Name:</strong> {userDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {userDetails.email}
      </p>
      <p>
        <strong>Age:</strong>
        {userDetails.age}
      </p>
      <p>
        <strong>Date of Birth:</strong> {userDetails.dob}
      </p>
      <p>
        <strong>Gender:</strong> {userDetails.gender}
      </p>
    </div>
  );
};

export default DisplayPage;
