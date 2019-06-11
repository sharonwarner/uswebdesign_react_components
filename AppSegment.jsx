import PropTypes from 'prop-types';
import React from 'react';

const AppSegment = ({children}) => {
  return <section className='grid-container'>
    {children}
  </section>
};

export default AppSegment;