import React from 'react';
import Img from '../../assets/gracias.png';
import { Col, Thumbnail } from 'react-bootstrap';

var sectionStyles = {
  minHeight: '60vh',
  // backgroundColor: 'gray',
  padding: '5%',
  textAlign: 'center',
  fontFamily : "Raleway-regular"
}

export default () => 
<section style={sectionStyles}>
  <Col>
    <Thumbnail src={Img} responsive />
      <h3 style={{color: '#00A69C'}}>
        <b>¡Gracias por escribirnos, <br/>pronto estaremos conversando!</b>
      </h3>
  </Col>
  <br/>
</section>;