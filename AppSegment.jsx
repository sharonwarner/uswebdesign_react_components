import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';

const AppSegment = ({children}) => {
  return <div>
    <section className='grid-container'>
      {children}
    </section>
    <Footer />
  </div>;
};

export default AppSegment;
