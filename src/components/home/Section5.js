import React from 'react';
import Img1 from '../../assets/antofagastaminerals.png'
import Img2 from '../../assets/bci.png'
import Img3 from '../../assets/enaex.png'
import Img4 from '../../assets/collahuasi.png'
import Img5 from '../../assets/consorcio.png'
import Img6 from '../../assets/800doctor.png'
import Img7 from '../../assets/entel.png'
import Img8 from '../../assets/arysta.png'
import Img9 from '../../assets/gobiernodechile.png'
import Img10 from '../../assets/scotiabank.png'
import {Col, Thumbnail} from 'react-bootstrap';

var sectionStyle = {
    height: '100%',
    color: '#FAAF40',
    padding: '5% 0%',
    overflow: 'hidden', 
    backgroundColor: '#FFF',
}

export default () =>  
<section style={sectionStyle} >
  <Col sm={12} style={{padding: '3% 0%'}}>
    <h4 className="hometitle"><b>CONFÍAN EN NOSOTROS</b></h4>
  </Col>     
  <div style={{paddingTop: '5%', color: 'gray'}}>
    <Col xs={6} sm={2} smOffset={1}><Thumbnail src={Img1} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img2} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img3} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img4} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img5} /></Col>
    <Col xs={6} sm={2} smOffset={1}><Thumbnail src={Img6} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img7} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img8} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img9} /></Col>
    <Col xs={6} sm={2}><Thumbnail src={Img10} /></Col>
  </div>
</section>