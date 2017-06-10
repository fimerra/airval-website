import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import Header from './Header';
import Description from './Description';
import Features from './Features';
import Platforms from './Platforms';
import Register from './Register';
import Copyright from './Copyright';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Description/>
        <Features/>
        <Platforms/>
        <Register/>
        <Copyright/>
      </div>
    );
  }
}

export default Home;
