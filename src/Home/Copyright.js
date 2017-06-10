import React from 'react';
import s from 'styled-components';

import fimerra from './assets/fimerra.png';

const FimerraLogo = s.img`
  width: 150px;
`;

export const Copyright = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <FimerraLogo src={fimerra} alt="fimerra"/>
        <p>
          © {new Date().getFullYear()} Fimerra
        </p>
      </div>
    </div>
  </section>
);

export default Copyright;