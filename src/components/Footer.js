import React from 'react';
// import { Col, Row } from 'react-bootstrap';

var sectionStyle = {
  height: '25vh',
  textAlign: 'center',
  // color: 'white',
  backgroundColor: 'rgb(56, 152, 138)',
  fontFamily : "Raleway-regular",
  fontSize: "14px",
  color: "#FFF"
}

// const socialmedia = {
//     width: '15vw',
//     textAlign: 'center',
//     margin: '0 43vw'
// }

export default () => 
<section style={sectionStyle} >
  <br/>
  <button className={'btn btn-link facebookbutton'} />
  <button className={'btn btn-link twitterbutton'} />
  <button className={'btn btn-link linkedinbutton'} />
  <br/>
  <b>ACELERACIÓN LABS</b>
  <br/>
  <span>Magnere 1540, of. 901, Providencia, Santiago</span>
  <br/>
  <a href="mailto:hola@aceleracion.cl">hola@aceleracion.cl</a>
</section>
