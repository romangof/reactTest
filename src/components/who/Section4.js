import React from 'react';
import {Col, Thumbnail} from 'react-bootstrap';
import Img1 from '../../assets/radebach.png'
import Img2 from '../../assets/cupula.png'
import Img3 from '../../assets/neutral.png'
import Img4 from '../../assets/kannus.png'
import Img5 from '../../assets/thedatamonitor.png'
import Img6 from '../../assets/mintelect.png'

var sectionStyle = {
    height: '65vh',
    textAlign: 'center',
    backgroundColor: 'rgb(247, 246, 246)',
    padding: '5% 0%',
    overflow: 'hidden', 
}

// this should be the same as section 5 in home with 
// logos and text and styles brought from bkEnd

export default () =>  
<section style={sectionStyle}>
    <h4 style={{color: 'green'}} >NUESTRAS EMPRESAS</h4>
    <div style={{padding: '5%', color: 'gray'}}>
        <Col xs={6} sm={4}><Thumbnail src={Img1} alt="10x10"></Thumbnail></Col>
        <Col xs={6} sm={4}><Thumbnail src={Img2} alt="10x10"></Thumbnail></Col>
        <Col xs={6} sm={4}><Thumbnail src={Img3} alt="10x10"></Thumbnail></Col>
        <Col xs={6} sm={4}><Thumbnail src={Img4} alt="10x10"></Thumbnail></Col>
        <Col xs={6} sm={4}><Thumbnail src={Img5} alt="10x10"></Thumbnail></Col>
        <Col xs={6} sm={4}><Thumbnail src={Img6} alt="10x10"></Thumbnail></Col>
    </div>
</section>