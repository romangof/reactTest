import React from 'react';
import { Col, Image } from 'react-bootstrap';

export default () => 
<div>
  <section className={'sectionsHow'} style={{
    textAlign: 'left',
    overflow: 'hidden', 
    height: '100%',
    }}>
    <Col xs={6} xsOffset={3} sm={4} smOffset={1} style={{padding: '5%'}}>
      <Image src={require( '../../assets/comunicaciones.png' )} responsive/>
    </Col>
    <Col xs={11} sm={4} smOffset={1} style={{padding: '5%'}}>
      <h4 style={{color: 'green'}}>COMUNICACIONES Y MARKETING DIGITAL</h4>
      <br/>
      <p>Desarrollamos planes de comunicación estratégica y marketing digital para aumentar la visibilidad
de la marca y mejorar su reputación online.</p>
      <br/>
      <p>Entendemos cómo diseñar estrategias que se transformen en ventas</p>
      <br/>
      <button>CONVERSEMOS</button>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden', 
    height: '100%',
    padding: '5% 0%',
    textAlign: 'left',
    backgroundColor: 'rgb(247, 246, 246)'}} >

    <Col xs={12} sm={6} smOffset={3} >
      <h3 style={{color: 'purple'}}>LO QUE SABEMOS</h3>
      <br/>
      <p>El proceso de gestión de la comunicación corporativa e institucional incluye como pilar fundamental el marketing digital, desde el posicionamiento y reconocimiento de marca, la atracción, interacción y conexión, hasta la generación de leads y el cierre de ventas.</p>
      <br/>
      <p>Comprenden los fundamentos del marketing tradicional y engloban una serie de estrategias digitales y comunicacionales de acuerdo a los objetivos específicos que suceden a lo largo del tiempo. Este proceso va desde el plan de comunicaciones estratégicas hasta la construcción de relaciones o engagement con el consumidor.</p>
      <br/>
      <p>Estas relaciones se desarrollan en unas etapas bien definidas dentro de un plan de marketing digital y, en consecuencia, de comunicación.</p>
      <br/>
      <p>Al considerar el marketing digital y las comunicaciones es necesario diseñar estrategias personalizadas a partir de los objetivos de negocio, para lograr la mayor eficiencia en la obtención de resultados y conversiones a través de las distintas herramientas online y offline.</p>
      <br/>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden',
    height: '100%',
    padding: '5% 0%',
    textAlign: 'left'}} >
    <Col xs={12} sm={9} smOffset={3}>
      <h3 style={{color: 'green', paddingBottom: '5%'}}>¿CÓMO TE AYUDAMOS?</h3>
    </Col>
    <br/>
    <br/>
    <Col xs={12} sm={3} smOffset={3}>
      <b>Comunicaciones estratégicas</b>
      <ul>
        <li>Campañas offline</li>
        <br/>
        <li>Comunicación corporativa</li>
        <br/>
        <li>Marketing directo</li>
        <li>Estrategias comunicacionales</li>
        <li>Branding</li>
      </ul>
    </Col>
    <Col xs={12} sm={3}>
      <b>Marketing digital</b>
      <ul>
        <li>Campañas digitales SEM</li>
        <li>Posicionamiento web SEO</li>
        <li>Redes sociales</li>
        <li>Marketing de contenidos</li>
        <li>Branding online</li>
        <li>Email marketing</li>
      </ul>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden',
    height: '100%',
    padding: '5% 0%',
    textAlign: 'center',
    backgroundColor: 'rgb(247, 246, 246)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    }} >

    <h3>Si tienes un desafío comercial específico,</h3>
    <h3><b>nos encantaría ayudarte.</b></h3>
    <button>CONTÁCTANOS</button>
  </section>
</div>;
