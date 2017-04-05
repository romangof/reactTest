import React from 'react';
import { Col, Image } from 'react-bootstrap';

var data = require('./data.json');
var i = 0;

export default (props) => 
<div>
  <section className={'sectionsHow'} style={{
    textAlign: 'left',
    overflow: 'hidden', 
    height: '100%'}} >

    <Col xs={6} xsOffset={3} sm={4} smOffset={1} style={{padding: '5%'}}>
      <Image src={require( `../../assets/${data[i]['section1']['imgURL']}.png` )} responsive/>
    </Col>
    <Col xs={11} sm={4} smOffset={1} style={{padding: '5%'}}>
      <h4 style={{color: 'green'}}>{data[i]['section1']['title']}</h4>
      <br/>
      {data[i]['section1']['texts'].map((text, index) => 
        <div key={index}>
          <p>{text}</p>
          <br/>
        </div>
      )}
      <button>{data[i]['section1']['buttonText']}</button>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden', 
    height: '100%',
    padding: '5% 0%',
    textAlign: 'left',
    backgroundColor: 'rgb(247, 246, 246)'}} >

    <Col xs={12} sm={6} smOffset={3} >
      <h3 style={{color: 'purple'}}>{data[i]['section2']['title']}</h3>
      <br/>
      {data[i]['section2']['texts'].map((text, index) => 
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
      <h3 style={{color: 'green', paddingBottom: '5%'}}>¿CÓMO TE AYUDAMOS?</h3>
    </Col>
    <br/>
    <br/>

    <Col sm={3} />

    {data[i]['section3']['texts'].map((text, index) => 
      <Col xs={12} sm={3} key={index} >
        <b>{text['subtitle']}</b>
        <ul>
          {text.topics.map((topic, jdex) => 
            <li key={jdex} >{topic}</li>
          )}
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

    <h3>Si tienes un desafío comercial específico,</h3>
    <h3><b>nos encantaría ayudarte.</b></h3>
    <button>CONTÁCTANOS</button>
  </section>
</div>;
