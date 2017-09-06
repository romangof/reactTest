import React from 'react';
import {Col, Thumbnail} from 'react-bootstrap';
import Img1 from '../../assets/radebach.png'
import Img2 from '../../assets/cupula.png'
import Img3 from '../../assets/neutral.png'
import Img4 from '../../assets/kannus.png'
import Img5 from '../../assets/thedatamonitor.png'
import Img6 from '../../assets/mintelect.png'

var sectionStyle = {
  height: '100%',
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: 'rgb(247, 246, 246)',
  padding: '5% 0%',
}

// this should be the same as section 5 in home with 
// logos, text and styles brought from bkEnd

export default () =>  
<section style={sectionStyle}>
  <h4 style={{color: '#00A69C'}}><b>NUESTRAS EMPRESAS</b></h4>
  <div style={{padding: '5%', color: 'gray'}}>
    <Col xs={6} sm={4}><a href="http://www.radebach.com/?utm_source=AL&utm_medium=logo-quienes-somos&utm_campaign=Aceleracion" target="_blank"><Thumbnail src={Img1} /></a></Col>
    <Col xs={6} sm={4}><a href="http://www.cupuladigital.cl/?utm_source=AL&utm_medium=logo-quienes-somos&utm_campaign=Aceleracion" target="_blank"><Thumbnail src={Img2} /></a></Col>
    <Col xs={6} sm={4}><Thumbnail src={Img3} /></Col>
    <Col xs={6} sm={4}><a href="http://www.kannus.cl/?utm_source=AL&utm_medium=logo-quienes-somos&utm_campaign=Aceleracion" target="_blank"><Thumbnail src={Img4} /></a></Col>
    <Col xs={6} sm={4}><Thumbnail src={Img5} /></Col>
    <Col xs={6} sm={4}><Thumbnail src={Img6} /></Col>
  </div>
</section>