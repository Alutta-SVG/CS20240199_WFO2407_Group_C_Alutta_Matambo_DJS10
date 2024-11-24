import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <img src="/images/error.png" alt="Error" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;