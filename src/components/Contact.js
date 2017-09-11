import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import WufooForm from "react-wufoo-embed";

export default () => <div>
  <Helmet>
    <title>Contáctanos | Aceleración Labs</title>
    <meta name="Description" content="Hablemos, nos encantaría ayudarte a alcanzar los objetivos comerciales de tu empresa." />
  </Helmet>
  <section className={'sectionsHow'} style={{textAlign: 'left', overflow: 'hidden', height: '100%'}}>

    <Col xs={6} xsOffset={3} sm={4} smOffset={1} style={{padding: '5%'}}>
      <Image src={require('../assets/contact.png')} responsive/>
    </Col>

    <Col xs={12} sm={5} smOffset={1} style={{padding: '5%'}}>
      <WufooForm userName="aceleracion" formHash="sc7ibw11g1pnc7"  />
    </Col>
  </section>
</div>
