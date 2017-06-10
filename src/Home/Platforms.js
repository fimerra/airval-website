import React from 'react';
import s from 'styled-components';

const PlatformIcon = s.i`
  margin-right: 20px;
  margin-left: 20px;
`;

export const Description = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="content-header title has-text-centered">
          What will I need?
        </h1>
        <p className="has-text-centered">
          Pretty much any device! AirVal supports the platforms below.
        </p>
        <div className="columns" style={{ marginTop: '30px' }}>
          <div className="column has-text-centered">
            <h2>On your tablet or computer</h2>
            <div style={{ marginTop: '20px' }}>
              <PlatformIcon className="fa fa-windows fa-3x"/>
              <PlatformIcon className="fa fa-apple fa-3x"/>
              <PlatformIcon className="fa fa-linux fa-3x"/>
            </div>
          </div>
          <div className="column has-text-centered">
            <h2>On your smart phone</h2>
            <div style={{ marginTop: '20px' }}>
              <PlatformIcon className="fa fa-apple fa-3x"/>
              <PlatformIcon className="fa fa-android fa-3x"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Description;
