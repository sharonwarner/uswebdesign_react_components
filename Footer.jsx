import PropTypes from 'prop-types';
import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
<footer className="usa-footer usa-footer--slim" role="contentinfo">
  <div className="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div className="usa-footer__primary-section">
    <div className="grid-row grid-row maxw-desktop margin-x-auto desktop:padding-x-4">
      <div className="mobile-lg:grid-col-8">
        <nav className="usa-footer__nav">
          <ul className="add-list-reset grid-row grid-gap">
            <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
            <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
            <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
            <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-lg:grid-col-4">
        <address className="usa-footer__address">
          <div className="grid-row grid-gap mobile-lg:grid-gap-0">
            <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
              <div className="usa-footer__contact-info">
                <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
              </div>
            </div>
            <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
              <div className="usa-footer__contact-info">
                <a href="mailto:info@agency.gov">info@agency.gov</a>
              </div>
            </div>
          </div>
        </address>
      </div>
    </div>
  </div>
  <div className="usa-footer__secondary-section">
    <div className="grid-container">
      <div className="usa-footer__logo grid-row grid-gap-2">
        <div className="grid-col-auto">
        </div>
        <div className="grid-col-auto">
          <h3 className="usa-footer__logo-heading">Name of Agency</h3>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
  }
}
