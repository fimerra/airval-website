import React from 'react';
import s from 'styled-components';

import clock from './assets/clock.svg';
import location from './assets/location.svg';
import tablet from './assets/tablet.svg';

const Icon = s.img`
  height: 70px;
  margin-bottom: 15px;
`;
const FeatureText = s.p`
  color: #2b608c !important;
`;

export const Features = () => (
  <section className="hero is-light">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <Icon src={clock} alt="clock"/>
            <h2 className="is-info">Any time</h2>
            <FeatureText className="feature">No restrictions on when you can create, update, or view an inspection or quote. You can manage your inspections and quotes at any time!</FeatureText>
          </div>
          <div className="column has-text-centered">
            <Icon src={location} alt="location"/>
            <h2 className="is-info">Any where</h2>
            <FeatureText className="feature">With offline support, you are able to use the app without an internet connection. You can perform your valuations any where! Whether it be a hut in the forest, or penthouse apartment.</FeatureText>
          </div>
          <div className="column has-text-centered">
            <Icon src={tablet} alt="tablet"/>
            <h2 className="is-info">Any device</h2>
            <FeatureText className="feature">AirVal can run on any device (smart phone, tablet, desktop, or laptop) and is available on iOS, Android, macOS, Windows and Linux</FeatureText>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;