import React, { Component } from 'react';
import Top from './navbar/Navbar';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Top />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
