import React from 'react';
import { Col, Image, Thumbnail } from 'react-bootstrap';
import Img from '../../assets/desarrollamos.png'

const circleStyle = {
  margin: '20% 15%',
  minHeight: '130vh',
  borderRadius: '50%',
  border: '10px dashed rgb(244,244,244)',
  padding: '3%'
}

const widgetStyle = {
  // padding: '5% 12%',
  height: '300px',
  textAlign: 'center'
}

export default () => 
<div id="circle">

  <Col xs={12} sm={4} style={widgetStyle}>
    <Image src={require( '../../assets/desarrollamos.png' )} style={{height: '100%'}} responsive/>
    <b>Titulo</b>
    <p>descripcion</p>
  </Col>

  {/*<Col xs={12} sm={4} style={widgetStyle} >*/}
  <div style={widgetStyle}>
    <Image src={require( '../../assets/creamos.png' )} style={{height: '100%'}} responsive/>
    title text
  </div>
  {/*</Col>*/}

  {/*<Col xs={12} sm={4} style={widgetStyle} >*/}
  <div>
   <Thumbnail src={require('../../assets/estrategia.png')} responsive >
    <h1>asd</h1>
    <p>123123123123123</p>
    </Thumbnail>
  </div>
  {/*</Col>*/}

  {/*<Col xs={12} sm={4} style={widgetStyle} >*/}
  <div>
    asd {/*<Thumbnail src={require('../../assets/tecnologia.png')} responsive ></Thumbnail>*/}
  </div>
  {/*</Col>*/}
</div>
