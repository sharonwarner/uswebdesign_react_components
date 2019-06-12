import PropTypes from 'prop-types';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="usa-overlay"></div>
        <header className="usa-header usa-header--extended bg-primary-darker" role="banner">
          <div className="usa-navbar">
            <div className="usa-logo" id="extended-logo">
              <em className="usa-logo__text text-base-lightest">Project title</em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav role="navigation" className="usa-nav">
            <div className="usa-nav__inner"><button className="usa-nav__close"><img src="/assets/img/close.svg" alt="close" /></button>
              <ul className="usa-nav__primary usa-accordion">
                <li className="usa-nav__primary-item">
                  <button className="usa-accordion__button usa-nav__link usa-current" aria-expanded="false" aria-controls="extended-nav-section-one"><span className="text-base-lightest">Current section</span></button>

                </li><li className="usa-nav__primary-item">
                <button className="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-two"><span className="text-base-lightest">Section</span></button>
              </li><li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="javascript:void(0)"><span className="text-base-lightest">Simple link</span></a>
              </li>
            </ul>
            <div className="usa-nav__secondary">
              <ul className="usa-nav__secondary-links">
                <li className="usa-nav__secondary-item">
                  <a href="">Secondary link</a>
                </li><li className="usa-nav__secondary-item">
                  <a href="">Another secondary link</a>
                </li>
              </ul>
              <form className="usa-search usa-search--small ">
              <div role="search">
                <label className="usa-sr-only" for="extended-search-field-small">Search small</label>
                <input className="usa-input" id="extended-search-field-small" type="search" name="search" />
                <button className="usa-button" type="submit"><span className="usa-sr-only">Search</span></button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  </div>
    );
  }
}
