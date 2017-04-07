import React from 'react';
import { Col, Row } from 'react-bootstrap';


var sectionStyle = {
  height: '30vh',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgb(56, 152, 138)',
  fontFamily : "Raleway-regular",
               fontSize: "14px",
}

const socialmedia = {
    width: '15vw',
    textAlign: 'center',
    margin: '0 43vw',



}



export default() => 
<section style={sectionStyle} >
  <br/>

  <Row style={socialmedia}>
<Col sm={4} md={4}>
<button className={`btn btn-link facebookbutton`}></button></Col>
 <Col sm={4} md={4}>
 <button className={`btn btn-link twitterbutton`}></button></Col>
 <Col sm={4} md={4}>
 <button className={`btn btn-link linkedinbutton`}></button></Col>
 </Row>


  <br/>
  <b>ACELERACIÓN LABS</b>
  <br/>
  <span>Magnere 1540, of. 901, Providencia, Santiago</span>
  <br/>
  <a href="mailto:hola@aceleracion.cl">hola@aceleracion.cl</a>
</section>
