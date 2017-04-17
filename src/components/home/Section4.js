import React from 'react';
import {Col} from 'react-bootstrap';

var sectionStyle = {
    height: '45vh',
    backgroundColor: 'rgb(242, 160, 49)',
    paddingTop: '2vh',
    fontSize: "1.2em",

}

export default () => 
<section style={sectionStyle}>
  <Col sm={12} style={{padding: '2% 0%'}}>
    <h4 className="hometitle dark"><b>NEWSLETTER</b></h4>
  </Col>    
  <div >
  <p className="descriptionHome">  ¿Quieres que te ayudemos?
    <br/>
    Suscríbete a nuestro newsletter y podrías recibir un diagnóstico gratis.
</p>
  </div>
  <div>
    <input className="homeinput" type="text" placeholder="Email" />
    <button className="homebutton homebutton2">LO QUIERO</button>
  </div>
</section>