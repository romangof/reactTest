import React from 'react';
import {div, Button, Col} from 'react-bootstrap';

var sectionStyle = {
    height: '40vh',
    // width: '100%',
    backgroundColor: 'rgb(242, 160, 49)',
    paddingTop: '5vh'
}

const titleStyle = {
    color: 'green',
    padding: '3% 0%',
}

export default () => 
<section style={sectionStyle}>
<Col sm={12} style={titleStyle}>
        <h4 className="hometitle3"><b>NEWSLETTER</b></h4>
    </Col>    <div>
        ¿Quieres que te ayudemos? <br/>
        Suscríbete a nuestro newsletter y podrías recibir un diagnóstico gratis.
    </div>
    <div>
        <input className="homeinput" type="text" placeholder="Email" />
        <button className="homebutton2">LO QUIERO</button>
    </div>
</section>