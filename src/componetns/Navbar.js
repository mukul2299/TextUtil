import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Navbar(prop) {
  return (<nav className={`navbar navbar-expand-lg navbar-${prop.theme} bg-${prop.theme}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{prop.pageTitle}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{prop.aboutTitle}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${prop.theme === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input me-2" type="checkbox" onChange={prop.toggleTheme} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${prop.theme === 'light' ? 'Dark' : 'Light'} Mode`}</label>
        </div>
        
      </div>
    </div>
  </nav>);
}

// Navbar.propTypes={pageTitle:PropTypes.string,aboutTitle:PropTypes.string}

export default Navbar;