import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

var data = require('./data.json');

const buttonStyle = {
  width: '15vw',
  minWidth: '150px',
  borderRadius: '0',
  backgroundColor: '#871D5F',
  color: '#FFF',
}

const buttonStyle2 = {
  width: '15vw',
  minWidth: '150px',
  borderRadius: '0',
  backgroundColor: '#FAAF40',
  padding: '2vh 4vh 2vh 4vh',
  margin: '2vh 4vh 2vh 4vh',
  color: '#FFF',
}

export default (props) => {

  var obj = data.find( x => x.site === props.params.section);

  if (!obj) {return <h1 style={{textAlign: 'center'}}>404 Page not found!</h1>}

  return <div>
    <section style={{textAlign: 'left', overflow: 'hidden', height: '100%'}}>
      <title>{document.title = obj['section1']['title']}</title>

      <Col xs={6} xsOffset={3} sm={5} smOffset={1} style={{padding: '5%'}}>
        <Image src={require( `../../assets/${obj['section1']['imgURL']}.png` )} responsive/>
      </Col>
      <Col xs={11} sm={5} smOffset={1} className='section1How' >
        <h4 style={{color: '#00A69C'}}><b>{obj['section1']['title']}</b></h4>
        <br/>
        {obj['section1']['texts'].map((text, index) => 
          <div key={index}>
            <p>{text}</p>
            <br/>
          </div>
        )}
        <LinkContainer to='/contacto' >
          <Button style={buttonStyle} block><b>{obj['section1']['buttonText']}</b></Button>
        </LinkContainer>
      </Col>
    </section>

    <section style={{
      overflow: 'hidden', 
      height: '100%',
      padding: '5% 0%',
      textAlign: 'left',
      backgroundColor: 'rgb(247, 246, 246)'}} >

      <Col xs={12} sm={6} smOffset={3} >
        <h3 style={{color: '#871D5F'}}><b>{obj['section2']['title']}</b></h3>
        <br/>
        {obj['section2']['texts'].map((text, index) => 
          <div key={index}>
            <p>{text}</p>
            <br/>
          </div>
        )}
      </Col>
    </section>

    <section style={{
      overflow: 'hidden',
      height: '100%',
      padding: '5% 0%',
      textAlign: 'left'}} >

      <Col xs={12} sm={9} smOffset={3}>
        <h3 style={{color: '#00A69C', paddingBottom: '5%'}}><b>¿CÓMO TE AYUDAMOS?</b></h3>
      </Col>
      <br/>
      <br/>

      <Col sm={ (obj['section3']['texts'].length >= 3) ? 2 : 3 } />

      {obj['section3']['texts'].map((text, index) => 
        <Col xs={12} sm={ (obj['section3']['texts'].length > 3) ? 2 : 3 } key={index}>
          <b>{text['subtitle']}</b>
          <br/>
          <ul>
            {text.topics.map((topic, jdex) => <li className="list" key={jdex} >{topic}</li>)}
          </ul>
        </Col>
      )}
    </section>

    <section style={{
      overflow: 'hidden',
      height: '100%',
      padding: '5% 0%',
      textAlign: 'center',
      backgroundColor: 'rgb(247, 246, 246)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'}} >

      <h3>Si tienes un desafío comercial específico,
      <br/><b>nos encantaría ayudarte.</b></h3>
      <LinkContainer to='/contacto' >
        <Button bsStyle="warning" style={buttonStyle2} block><b>CONTÁCTANOS</b></Button>
      </LinkContainer>
    </section>
  </div>}