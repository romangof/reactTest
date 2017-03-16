import React, { Component } from 'react';
import Top from './navbar/Navbar';
import Footer from './navbar/Footer';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Top />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
