import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';

var data = require('./data.json');

const buttonStyle = {
  width: '15vw',
  minWidth: '150px',
  borderRadius: '0',
  backgroundColor: '#871D5F',
  color: '#FFF',
  fontFamily : "Raleway-regular",
}

const buttonStyle2 = {
  width: '15vw',
  minWidth: '150px',
  borderRadius: '0',
  backgroundColor: '#FAAF40',
  padding: '2vh 4vh 2vh 4vh',
  margin: '2vh 4vh 2vh 4vh',
  color: '#FFF',
  fontFamily : "Raleway-regular",
}

export default (props) => {

  // var obj = data[props.params.section];
  var obj = data.find( x => x.site === props.params.section);
  // console.log(`urlParam: ${props.params.section} - json.site: ${data.filter( x => x.site === props.params.section )}`);
  // console.log(data.filter( x => x.site === props.params.section ));
  // console.log(data.find( x => x.site === props.params.section ));

  if (!obj) {
    return <h1>404.. This page is not found!</h1>
  }

  return <div>
    <section className={'sectionsHow'} style={{
      textAlign: 'left',
      overflow: 'hidden', 
      height: '100%',
      fontFamily : "Raleway-regular" }} >

      <Col xs={6} xsOffset={3} sm={5} smOffset={1} style={{padding: '5%'}}>
        <Image src={require( `../../assets/${obj['section1']['imgURL']}.png` )} responsive/>
      </Col>
      <Col xs={11} sm={5} smOffset={1} style={{padding: '5% 20% 0 0'}}>
        <h4 style={{color: '#00A69C', fontFamily: "Raleway"}}>{obj['section1']['title']}</h4>
        <br/>
        {obj['section1']['texts'].map((text, index) => 
          <div key={index}>
            <p>{text}</p>
            <br/>
          </div>
        )}
         <Button  bsSize="medium" style={buttonStyle} block>{obj['section1']['buttonText']}</Button>
      </Col>
    </section>

    <section style={{
      overflow: 'hidden', 
      height: '100%',
      padding: '5% 0%',
      textAlign: 'left',
      backgroundColor: 'rgb(247, 246, 246)'}} >

      <Col xs={12} sm={6} smOffset={3} >
        <h3 style={{color: '#871D5F', fontFamily: "Raleway"}}>{obj['section2']['title']}</h3>
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
        <h3 style={{color: '#00A69C', paddingBottom: '5%',  fontFamily: "Raleway"}}>¿CÓMO TE AYUDAMOS?</h3>
      </Col>
      <br/>
      <br/>

      <Col sm={ (obj['section3']['texts'].length >= 3) ? 2 : 3 } />

      {obj['section3']['texts'].map((text, index) => 
        <Col xs={12} sm={ (obj['section3']['texts'].length > 3) ? 2 : 3 } key={index} style={{fontFamily: "Raleway-regular"}}>
          <b>{text['subtitle']}</b>
          <ul>
            {text.topics.map((topic, jdex) => <li key={jdex} >{topic}</li>)}
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
      <button bsStyle="warning" bsSize="medium" style={buttonStyle2} block>CONTÁCTANOS</button>
    </section>
  </div>}