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
      <Image src={require( '../../assets/diseno.png' )} responsive/>
    </Col>
    <Col xs={11} sm={4} smOffset={1} style={{padding: '5%'}}>
      <h4 style={{color: 'green'}}>DISEÑO E IDENTIDAD CORPORATIVA</h4>
      <br/>
      <p>Creamos marcas más allá de la concepción gráfica. Desarrollamos su identidad corporativa a través de diseño estratégico y cohesivo.</p>
      <br/>
      <p>Entendemos cómo crear, construir y diseñar proyectos exitosos</p>
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
      <h3 style={{color: 'purple'}}> <b>LO QUE SABEMOS</b> </h3>
      <br/>
      <p>En un creciente y saturado mundo empresarial, el diseño estratégico ayuda a las organizaciones a competir por su participación en el mercado. La aplicación de los principios de diseño orientados al futuro con el fin de aumentar la capacidad de innovación y competitividad de una empresa, permiten tomar decisiones de diseño en base a los hechos y no a la estética o intuición.</p>
      <br/>
      <p>El análisis del contexto de la industria y el consumidor, las tendencias y todas las variables del mercado, son los cimientos para lograr una forma efectiva de conectar innovación, gestión y diseño, más allá de la concepción gráfica. A menudo pretende fortalecer el branding, el desarrollo de productos, la identidad corporativa y agregar valor en la entrega de experiencias, productos y servicios. Por todo esto creemos que un diseño debe ser efectivo tanto en cómo se ve y en cómo funciona: looks, feels, works.</p>
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
    <Col xs={12} sm={3} smOffset={2}>
      <b>Diseño de identidad corporativa</b>
      <ul>
        <li>Creación de logos</li>
        <li>Papelería corporativa</li>
        <li>Manuales de identidad corporativa</li>
        <li>Diseño de mailing</li>
      </ul>
    </Col>
    <Col xs={12} sm={3}>
      <b>Diseño gráfico</b>
      <ul>
        <li>Diseño para redes sociales</li>
        <li>Diseño publicitario</li>
        <li>Diseño editorial</li>
      </ul>
    </Col>
    <Col xs={12} sm={3}>
      <b>Diseño digital</b>
      <ul>
        <li>Diseño UX</li>
        <li>Sitios web</li>
        <li>Aplicaciones móviles</li>
        <li>Aplicaciones web</li>
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
    }}>

    asd
    <br/> 
    asdasd
    <button>asdasd</button>
  </section>
</div>;
