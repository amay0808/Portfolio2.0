import React from "react";
import ErrorIcon from "../assets/images/group-25.svg";
import "./Error.css";

const Error = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="error-container">
      <img className="error-icon" src={ErrorIcon} alt="error" />
      <p className="error-text">Sorry, invalid format</p>
    </div>
  );
};

export default Error;
