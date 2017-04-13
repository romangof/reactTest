import React from 'react';
import Img from '../../assets/contact.png';
import { Col, Image, Thumbnail } from 'react-bootstrap';


var sectionStyles = {
  minHeight: '90vh',
  // backgroundColor: 'gray',
  padding: '5%',
  textAlign: 'center',
  fontFamily : "Raleway-regular"
}

export default () => 
<div>
<section style={sectionStyles} >
          <Col >
            <Thumbnail  src={Img} responsive ></Thumbnail>
                <h3 style={{color: '#00A69C'}}><b>¡Gracias por escribirnos, <br/>pronto estaremos conversando!
</b></h3>
              </Col>

    <br/>
</section>;
</div>
