import React from 'react';
import { Col, Image, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

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

    // console.log(prevState);
    // console.log(this.state.data);
  }


  post () {
    console.log(this.state.data);
    // const url = 'http://www.reddit.com/r/reactjs.json';
    // fetch(url)
    //   .then((response) => {
    //     console.log(response.json());
    //   })
    //   .catch((error) => {
    //     console.log('***   ' + error);
    //   })
    this.setState({data: {}});
  }

  render () {
    return (
      <div>
        <section className={'sectionsHow'} style={{
          textAlign: 'left',
          overflow: 'hidden',
          height: '100%'
        }}>
          <Col xs={6} xsOffset={3} sm={4} smOffset={1} style={{padding: '5%'}}>
            <Image src={require( '../assets/ti.png' )} responsive/>
            {this.state.data.name}
          </Col>
          <Col xs={12} sm={5} smOffset={1} style={{padding: '5%'}}>
            <h4 style={{color: 'green'}}>Contacto</h4>
            <br/>
            Hablemos, nos encantaría ayudarte.
            <br/>
            <br/>
            <form action="">
              <FormGroup controlId="formName">
                <ControlLabel>Nombre</ControlLabel>
                <FormControl type="text" name='name' value={this.state.data.name} onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup controlId="formCompany">
                <ControlLabel>Empresa</ControlLabel>
                <FormControl type="text" name='company' onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup controlId="formMail">
                <ControlLabel>Mail</ControlLabel>
                <FormControl type="email" name='email' onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup controlId="formPhone">
                <ControlLabel>Teléfono</ControlLabel>
                <FormControl type="text" name='phone' onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup controlId="formComment">
                <ControlLabel>Comentario</ControlLabel>
                <FormControl componentClass="textarea" style={{height: '200px'}} name='comment' onChange={this.handleChange}/>
              </FormGroup>

              <Button className={'contactBtn'} 
                style={{color: 'white', backgroundColor: 'purple', borderRadius: 0}} 
                bsSize="large" 
                onClick={this.post}>Enviar</Button>
            </form>
          </Col>
        </section>
      </div>
    );
  }
}

