import React from 'react';
import PropTypes from 'prop-types';
const ErrorMessage = ({ message }) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src="./public/images/error-message.png" alt="Error" width="200" />
        <p style={{ color: 'red' }}>{message}</p>
      </div>
    );
  };

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
  };
  
  export default ErrorMessage;