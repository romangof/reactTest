import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const sectionStyle = {
  // minHeight: '65vh',
  height: '100%',
  overflow: 'hidden',
  padding: '5% 0%',
  textAlign: 'center',
  fontFamily : "Raleway"
  // backgroundColor: 'rgb(247, 246, 246)',
}

const textStyle = {
  fontWeight: 'lighter',
  color: 'orange',
  textAlign: 'left',
  paddingLeft: '10%',
  fontSize: '80px',
  lineHeight: '72px',
  fontFamily : "Raleway-regular"
}

export default () =>
<section style={sectionStyle}>
  <Col xs={12} sm={5} smOffset={1} style={textStyle}>
    <div>WE</div>
    <div>GET</div>
    <div>SHIT</div>
    <b>DONE</b>
  </Col>
  <Col xs={12} sm={5} style={{padding: '5% 8%'}} >
    <div>
      <p>Estamos unidos por un apetito insaciable de ideas e innovación, la pasión que sentimos por nuestro trabajo y las ganas de enfrentar nuevos desafíos.</p>
      <br/>
      <p>Averigua todo lo que podemos hacer por ti</p>
      <br/>
      <LinkContainer to='contact' >
        <Button bsStyle="warning" bsSize="large" style={{borderRadius: 0}} block >¡CONTÁCTANOS!</Button>
      </LinkContainer>
    </div>
  </Col>
</section>
