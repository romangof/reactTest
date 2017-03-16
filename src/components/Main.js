import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
