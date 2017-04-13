import React from 'react';
// import { Image } from 'react-bootstrap';

var sectionStyle = {
  height: '25vh',
  textAlign: 'center',
  backgroundColor: 'rgb(56, 152, 138)',
  fontFamily : "Raleway-regular",
  fontSize: "14px",
  color: "#FFF"
}

export default () => 
<section style={sectionStyle} >
  <br/>
  <div style={{paddingLeft: '4%'}} >
    <div className={'btn btn-link socialmedia facebookbutton'} />
    <div className={'btn btn-link socialmedia twitterbutton'} />
    <div className={'btn btn-link socialmedia linkedinbutton'} />
  </div>
  <br/>
  <b>ACELERACIÓN LABS</b>
  <br/>
  <span>Magnere 1540, of. 901, Providencia, Santiago</span>
  <br/>
  <a href="mailto:hola@aceleracion.cl" style={{color: 'white'}} >hola@aceleracion.cl</a>
</section>
