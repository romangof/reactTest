import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default (props) => 
<div>
  <Header location={props.location.pathname}/>
  {props.children}
  <Footer />
</div>;
