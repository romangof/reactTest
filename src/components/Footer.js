import React from 'react';
// import { Image } from 'react-bootstrap';

var sectionStyle = {
  height: '25vh',
  textAlign: 'center',
  backgroundColor: 'rgb(56, 152, 138)',
  fontSize: "14px",
  color: "#FFF"
}

export default () => 
<section style={sectionStyle} >
  <br/>
  <div style={{paddingLeft: '4%'}} >
                <a href="https://www.facebook.com/aceleracionlabs/"><div className={'btn btn-link socialmedia facebookbutton'} /></a>
                <a href="https://twitter.com/AceleracionLabs"><div className={'btn btn-link socialmedia twitterbutton'} /></a>
                <a href="https://www.linkedin.com/company-beta/10178890/"><div className={'btn btn-link socialmedia linkedinbutton'} /></a>
  </div>
  <br/>
  <b>ACELERACIÓN LABS</b>
  <br/>
  <span>Magnere 1540, of. 901, Providencia, Santiago</span>
  <br/>
  <a href="mailto:hola@aceleracion.cl" style={{color: 'white'}} >hola@aceleracion.cl</a>
</section>
