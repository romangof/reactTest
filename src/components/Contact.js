import React from 'react';
import { Col, Image, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import runtimeEnv from '@mars/heroku-js-runtime-env'

export default class Contact extends React.Component {
  constructor(props) {
    super();
    this.state = { data: {} };
    this.handleChange = this.handleChange.bind(this);
    this.post = this.post.bind(this);
  }

  handleChange(e) {
    var data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({data: data});
  }

  post (e) {
    e.preventDefault();
    const env = runtimeEnv();
    var data = this.state.data;
    if (data.name && data.company && data.job_title && data.email && data.telephone && data.message) {
      fetch(env.REACT_APP_API_URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({contact: this.state.data})
      })
      .then((response) => {
        if(response.ok) {
          browserHistory.push('/gracias');
        } else {
          return response.json();
        }
      })
      // .then((response) => {console.log(response.error)})
      .catch((error) => {console.log(error)})
    }
  }

  render () {
    return (
      <div>
        <title>{document.title = 'Contacto'}</title>
        <section className={'sectionsHow'} style={{textAlign: 'left', overflow: 'hidden', height: '100%'}}>

          <Col xs={6} xsOffset={3} sm={4} smOffset={1} style={{padding: '5%'}}>
            <Image src={require('../assets/contact.png')} responsive/>
          </Col>

          <Col xs={12} sm={5} smOffset={1} style={{padding: '5%'}}>
            <h4 style={{color: '#00A69C'}}><b>CONTACTO</b></h4>
            <br/>
            Hablemos, nos encantaría ayudarte.
            <br/>
            <br/>

            <form onSubmit={this.post}>
              <FormGroup controlId="formName" validationState={(this.state.data.name) ? 'success':'error'}>
                <ControlLabel>Nombre</ControlLabel>
                <FormControl type="text" name='name' onChange={this.handleChange} required/>
              </FormGroup>

              <FormGroup controlId="formCompany" validationState={(this.state.data.company) ? 'success':'error'}>
                <ControlLabel>Empresa</ControlLabel>
                <FormControl type="text" name='company' onChange={this.handleChange} required/>
              </FormGroup>
              
              <FormGroup controlId="formTitle" validationState={(this.state.data.job_title) ? 'success':'error'}>
                <ControlLabel>Cargo</ControlLabel>
                <FormControl type="text" name='job_title' onChange={this.handleChange} required/>
              </FormGroup>

              <FormGroup controlId="formMail" validationState={/^\S+@\S+\.\S+$/.test(this.state.data.email) ? 'success':'error'}>
                <ControlLabel>Mail</ControlLabel>
                <FormControl type="email" name='email' onChange={this.handleChange} required/>
              </FormGroup>

              <FormGroup controlId="formPhone" validationState={/\(?([0-9]{3})\)?([ .-]?)([0-9]{4})\2([0-9]{4})/.test(this.state.data.telephone) ? 'success':'error'}>
                <ControlLabel>Teléfono</ControlLabel>
                <FormControl type="text" name='telephone' onChange={this.handleChange} required/>
              </FormGroup>
              
              <FormGroup controlId="formInterest">
                <ControlLabel>Interés</ControlLabel>
                <FormControl componentClass="select" defaultValue={this.props.params.from}>
                  <option value="comunicaciones">Marketing y Comunicaciones</option>
                  <option value="diseno">Diseño e identidad corporativa</option>
                  <option value="ti">Soluciones TI</option>
                  <option value="business">Negocios</option>
                  <option value="newsletter">Suscripcion</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formComment" validationState={(this.state.data.message) ? 'success':'error'}>
                <ControlLabel>Comentario</ControlLabel>
                <FormControl componentClass="textarea" style={{height: '200px'}} name='message' onChange={this.handleChange} required/>
              </FormGroup>

              <Button onClick={this.post} type='submit' bsSize="large" style={{
                color: 'white',
                backgroundColor: '#871D5F',
                borderRadius: 0,
                padding: '2vh 4vh 2vh 4vh'}}>Enviar</Button>

            </form>
          </Col>
        </section>
      </div>
    );
  }
}
