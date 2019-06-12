import PropTypes from 'prop-types';
import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
<footer class="usa-footer usa-footer--slim" role="contentinfo">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="grid-row grid-row maxw-desktop margin-x-auto desktop:padding-x-4">
      <div class="mobile-lg:grid-col-8">
        <nav class="usa-footer__nav">
          <ul class="add-list-reset grid-row grid-gap">
            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
            <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
              <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mobile-lg:grid-col-4">
        <address class="usa-footer__address">
          <div class="grid-row grid-gap mobile-lg:grid-gap-0">
            <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
              <div class="usa-footer__contact-info">
                <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
              </div>
            </div>
            <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
              <div class="usa-footer__contact-info">
                <a href="mailto:info@agency.gov">info@agency.gov</a>
              </div>
            </div>
          </div>
        </address>
      </div>
    </div>
  </div>
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="usa-footer__logo grid-row grid-gap-2">
        <div class="grid-col-auto">
        </div>
        <div class="grid-col-auto">
          <h3 class="usa-footer__logo-heading">Name of Agency</h3>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
  }
}