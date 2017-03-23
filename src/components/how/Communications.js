import React from 'react';
import { Col, Image } from 'react-bootstrap';

export default( ) => 
<div>
  <section className={'sectionsHow'} style={{height: '70vh', textAlign: 'left'}}>
    <Col xs={12} sm={4} smOffset={1} style={{padding: '5%'}}>
      <Image src={require( '../../assets/comunicaciones.png' )} responsive/>
    </Col>
    <Col xs={11} sm={4} smOffset={1} style={{
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <h4 style={{color: 'green'}}>Title</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor deserunt sequi, alias officia voluptatum aliquam corrupti necessitatibus velit ratione veniam, soluta fugit reprehenderit, numquam sed excepturi quia ipsa totam saepe?</p>
      <button>conversemos</button>
    </Col>
  </section>
</div>;
