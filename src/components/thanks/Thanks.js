import React from 'react';
import Img from '../../assets/contact.png';
import { Col, Image, Thumbnail } from 'react-bootstrap';


var sectionStyles = {
  minHeight: '90vh',
  // backgroundColor: 'gray',
  padding: '5%',
  textAlign: 'center',
  fontFamily : "Raleway-regular"
}

export default () => 
<div>
<section style={sectionStyles}>
          <Col >
            <Thumbnail  src={Img} responsive ></Thumbnail>
                <h3 style={{color: '#00A69C'}}><b>¡Gracias por escribirnos, <br/>pronto estaremos conversando!
</b></h3>
              </Col>

    <br/>
    {/*<p>Un grupo de empresas que trabajan en conjunto para ofrecer soluciones disruptivas de negocios a través de diseño, estrategias digitales e innovación tecnológica.</p>
    <br/>
    <p>Nos especializamos en comunicación estratégica, marketing digital, diseño gráfico, identidad corporativa, desarrollo de software, aplicaciones móviles y sitios web.</p>
    <br/>
    <p>Brindamos una oferta de valor integral que responde a las necesidades específicas de nuestros clientes con formas innovadoras de hacer negocios desde la perspectiva del software, diseño y comunicación.</p>*/}

</section>;
</div>
