import React from 'react';

// success, error, warning, info
const Success = ({ title, message, type='success' }) => (

  <div className={`usa-alert usa-alert--${type}`} >
    <div className="usa-alert__body">
      <h3 className="usa-alert__heading">{title}</h3>
      <p className="usa-alert__text">{message}</p>
    </div>
  </div>

);

export default Success;
