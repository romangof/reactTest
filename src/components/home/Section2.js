import React from 'react';
import Img1 from '../../assets/comunicaciones.png'
import Img2 from '../../assets/diseno.png'
import Img3 from '../../assets/ti.png'
import Img4 from '../../assets/modelos.png'
import {Row, Col, Thumbnail} from 'react-bootstrap';

const titleStyle = {
    color: 'green',
    padding: '3% 0%',
}

const colStyle = {
    padding: "0% 4%",
    // height: '70px',
}

// TRY react-bootstrap IMAGE component instead of Thumbnail

export default () =>
<section className="container-fluid" style={{minHeight: "90vh", paddingTop: '3%'}}>

  <Col sm={12} style={titleStyle}>
    <h4 className="hometitle1"><b>LÍNEAS DE NEGOCIO</b></h4>
  </Col>
  
  <Row>
    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <Thumbnail src={Img1}>
          <h4>Comunicaciones y Marketing Digital</h4>
          <p>Aumenta la visibilidad de tu marca, mejora su reputación online y consigue más conversiones.</p>
        </Thumbnail>        
      </Row>
    </Col>

    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <Thumbnail src={Img2}>
          <h4>Diseño e Identidad Corportativa</h4>
          <p>Aumenta la capacidad de innovación y competitividad de tu empresa mediante diseño estratégico.</p>
        </Thumbnail>
      </Row>
    </Col>

    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <Thumbnail src={Img3}>
          <h4>Soluciones TI</h4>
          <p>Responde a los desafíos dinámicos del mercado con el uso de nuevas tecnologías.</p>
        </Thumbnail>
      </Row>
    </Col>

    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <Thumbnail src={Img4}>
          <h4>Modelos de Negocios</h4>
          <p>Descubre nuevas oportunidades de éxito para tu empresa.</p>
        </Thumbnail>
      </Row>
    </Col>
  </Row>

</section>
