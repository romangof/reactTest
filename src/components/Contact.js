import React from 'react';
import { Col, Image, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

// export default class Contact {
//   asd
// };


export default( ) => 
<div>
  <section className={'sectionsHow'} style={{
    textAlign: 'left',
    overflow: 'hidden',
    height: '100%'
  }}>
    <Col xs={6} xsOffset={3} sm={4} smOffset={1} style={{
      padding: '5%'
    }}>
      <Image src={require( '../assets/ti.png' )} responsive/>
    </Col>
    <Col xs={11} sm={5} smOffset={1} style={{
      padding: '5%'
    }}>
      <h4 style={{
        color: 'green'
      }}>Contacto</h4>
      <br/>
      Hablemos, nos encantaría ayudarte.
      <br/>
      <br/>
      <form action="">
        <FormGroup controlId="formName">
          <ControlLabel>Nombre</ControlLabel>
          <FormControl type="text"/>
        </FormGroup>

        <FormGroup controlId="formCompany">
          <ControlLabel>Empresa</ControlLabel>
          <FormControl type="text"/>
        </FormGroup>

        <FormGroup controlId="formMail">
          <ControlLabel>Mail</ControlLabel>
          <FormControl type="email"/>
        </FormGroup>

        <FormGroup controlId="formPhone">
          <ControlLabel>Teléfono</ControlLabel>
          <FormControl type="text"/>
        </FormGroup>

        <FormGroup controlId="formComment">
          <ControlLabel>Comentario</ControlLabel>
          <FormControl componentClass="textarea" style={{height: '200px'}}/>
        </FormGroup>

        <Button className={'contactBtn'} style={{color: 'white', backgroundColor: 'purple', borderRadius: 0}} bsSize="large">Enviar</Button>
      </form>
    </Col>
  </section>
</div>;
