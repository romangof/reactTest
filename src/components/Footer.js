import React from 'react';
import Img from '../assets/facebook.png'
import Img2 from '../assets/twitter.png'
import Img3 from '../assets/linkedin.png'
import Img4 from '../assets/instagram.png'
import { Thumbnail } from 'react-bootstrap';

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
  <div  className="socialmedia">
  <ul style={{paddingLeft: '4%'}} >
<li><a href="https://www.facebook.com/aceleracionlabs/"><img src={Img} /></a></li>
<li><a href="https://twitter.com/AceleracionLabs"><img src={Img2} /></a></li>
<li><a href="https://www.linkedin.com/company-beta/10178890/"><img src={Img3} /></a></li>
<li><a href="https://www.instagram.com/team.aceleracion/"><img src={Img4} /></a></li>
  </ul>
  </div>
  <br/>
  <b>ACELERACIÓN LABS</b>
  <br/>
  <span>Magnere 1540, of. 901, Providencia, Santiago</span>
  <br/>
  <a href="mailto:hola@aceleracion.cl" style={{color: 'white'}} >hola@aceleracion.cl</a> | +56 2 27054324
</section>
