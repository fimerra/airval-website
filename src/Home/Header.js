import React from 'react';
import s from 'styled-components';
import { Link } from 'react-scroll';

import logo from './assets/logo-white.png';
import landingVideo from './assets/landing.mp4';
import videoPlaceholder from './assets/video-placeholder.jpg';

const HeaderText = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = () => (
  <section className="hero" style={{ height: '80vh' }}>
    <div id="video-overlay"/>
    <video id="background-video" poster={videoPlaceholder} playsInline autoPlay muted loop>
      <source src={landingVideo} type="video/mp4"/>
    </video>
    <HeaderText className="header hero-body">
      <div className="container">
        <h1 className="title has-text-white">
          <img className="airval-logo" src={logo} alt="airval"/>
          <strong>AirVal</strong>
        </h1>
        <h2 className="subtitle has-text-white has-text-centered">
          Simplified property valuation reports
        </h2>
        <p className="has-text-white has-text-centered">
          Any time, any where, any device.
        </p>
        <div className="block has-text-centered" style={{ marginTop: '50px' }}>
          <Link to="register-beta" smooth={true} duration={1000}>
            <a className="button is-white is-outlined">
              Register for the beta period
            </a>
          </Link>
        </div>
      </div>
    </HeaderText>
  </section>
);

export default Header;