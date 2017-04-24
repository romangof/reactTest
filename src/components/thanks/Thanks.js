import React from 'react';
import Img from '../../assets/gracias.png';
import { Col, Thumbnail } from 'react-bootstrap';

var sectionStyles = {
  minHeight: '60vh',
  padding: '5%',
  textAlign: 'center',
}

export default (props) => 
<section style={sectionStyles}>
  <title>{document.title = 'Gracias!'}</title>
  <Col>
    <Thumbnail src={Img} />
      <h3 style={{color: '#00A69C'}}>
        <b>¡Gracias por escribirnos, <br/>pronto estaremos conversando!</b>
        {console.log(props)}
        {console.log(props.params)}
      </h3>
  </Col>
  <br/>
</section>