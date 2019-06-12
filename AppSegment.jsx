import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AppSegment = ({children}) => {
  return <div>
    <Header />
    <section className='grid-container'>
      {children}
    </section>
    <Footer />
  </div>;
};

export default AppSegment;
