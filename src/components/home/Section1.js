import React from 'react';
import Img from '../../assets/fondo-01.png'
import Img2 from '../../assets/down.png'
import { Button, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const sectionStyle = {
  minHeight: "30vh",
  backgroundImage: `url(${Img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  color: 'white',
  padding: '20% 20% 0 20%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const buttonStyle = {
  width: '70%',
  margin: '5% auto',
  borderRadius: '0',
}

const thumbnailStyle = {
  margin: '15vh 0 5vh 0',
}

export default () =>
<section className="container-fluid" style={sectionStyle}>
  <h1>
    <b>SOMOS UNA TRANSFORMADORA DIGITAL</b>
  </h1>
  <h4 className="hometitle" style={{color:'white'}}>
    que ofrece soluciones disruptivas a las medianas y grandes empresas a través de diseño, estrategias digitales e innovación tecnológica, para desafiar los anticuados modelos de negocio y diseñar las empresas del futuro.
  </h4>
  <LinkContainer to='/contacto' >
    <Button bsStyle="warning" bsSize="large" style={buttonStyle} block>¡DESAFÍANOS!</Button>
  </LinkContainer>
  <Thumbnail src={Img2} style={thumbnailStyle}></Thumbnail>
</section>