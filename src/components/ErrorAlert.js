import React from "react";

const ErrorAlert = ({ message }) => {
  return (
    <div className="error-msg">
      <i className="fa fa-times-circle"></i>
      {message}
    </div>
  );
};

export default ErrorAlert;
