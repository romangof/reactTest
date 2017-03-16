import React, { Component } from 'react';
import Ss1 from './Section1';
import Ss2 from './Section2';
import Ss3 from './Section3';
import Ss4 from './Section4';
import Ss5 from './Section5';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Ss1 />

        <Ss2 />

        <Ss3 />

        <Ss4 />

        <Ss5 />
                
        {/*<section className="container-fluid">
          asd
        </section>

        <well>Section landing</well>
        <div>asd4</div>
        <div>asd4</div>*/}
      </div>
    );
  }
}
