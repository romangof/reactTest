import React from 'react';
import Img from '../../assets/maquina.png';
import { Col, Image } from 'react-bootstrap';

var sectionStyles = {
  minHeight: '70vh',
  padding: '5% 4%',
  textAlign: 'left',
}

export default () =>
<section style={sectionStyles}>
  <Col sm={5} smOffset={1}>
    <h3 style={{color: '#00A69C'}}><b>SOMOS</b></h3>
    <br/>
    <p>Un grupo de empresas que trabajan en conjunto para ofrecer soluciones disruptivas de negocios a través de diseño, estrategias digitales e innovación tecnológica.</p>
    <br/>
    <p>Nos especializamos en comunicación estratégica, marketing digital, diseño gráfico, identidad corporativa, desarrollo de software, aplicaciones móviles y sitios web.</p>
    <br/>
    <p>Brindamos una oferta de valor integral que responde a las necesidades específicas de nuestros clientes con formas innovadoras de hacer negocios desde la perspectiva del software, diseño y comunicación.</p>
  </Col>
  <Col sm={5} style={{paddingLeft: '5%'}} >
    <Image src={Img} responsive ></Image>
  </Col>
</section>;
