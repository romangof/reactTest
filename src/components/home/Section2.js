import React from 'react';
import Img1 from '../../assets/comunicaciones.png'
import Img2 from '../../assets/diseno.png'
import Img3 from '../../assets/ti.png'
import Img4 from '../../assets/modelos.png'
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const colStyle = {
  overflow: 'hidden',
  height: '100%',
  padding: "0% 4%",
  fontSize: "15px",
  color: "#FFF"
}

const buttonStyle = {
  width: '15vw',
  minWidth: '150px',
  margin: '5% auto',
  borderRadius: '0',
}

export default () =>
<section className="container-fluid" style={{minHeight: "90vh", paddingTop: '3%', backgroundColor: '#FFF'}}>

  <Col sm={12}>
    <h4 className="hometitle" style={{color:'#38988A'}}><b>LÍNEAS DE NEGOCIO</b></h4>
  </Col>
  
  <Row>
   
    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <div className="business">
          <Thumbnail src={Img1}>
          <h4 className="businesstitle"><b>Comunicaciones y Marketing Digital</b></h4>
          <p className="businessdescription">Aumenta la visibilidad de tu marca, mejora su reputación online y consigue más conversiones.</p>
          </Thumbnail>
        </div>
          <LinkContainer to='/ayudamos/comunicaciones' >
            <Button bsStyle="warning" style={buttonStyle} block>Más Información</Button>
         </LinkContainer>
      </Row>
    </Col>

    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <div className="business">
         <Thumbnail src={Img2}>
           <h4 className="businesstitle"><b>Diseño e Identidad Corportativa</b></h4>
            <p className="businessdescription">Aumenta la capacidad de innovación y competitividad de tu empresa mediante diseño estratégico.</p>
        </Thumbnail>
        </div>
         <LinkContainer to='/ayudamos/diseno' >
            <Button bsStyle="warning" style={buttonStyle} block>Más Información</Button>
          </LinkContainer>
      </Row>
    </Col>

    <Col xs={12} sm={3} style={colStyle}>
      <Row>
        <div className="business">
        <Thumbnail src={Img3}>
           <h4 className="businesstitle"><b>Soluciones TI</b></h4>
            <p className="businessdescription">Responde a los desafíos dinámicos del mercado con el uso de nuevas tecnologías.</p>
          <br />
          </Thumbnail>
          </div>
          <LinkContainer to='/ayudamos/ti' >
            <Button bsStyle="warning" style={buttonStyle} block>Más Información</Button>
          </LinkContainer>
      </Row>
    </Col>

    <Col xs={12} sm={3} style={colStyle}>
      <Row>
       <div className="business">
        <Thumbnail src={Img4}>
          <h4 className="businesstitle"><b>Modelos de Negocios</b></h4>
          <p className="businessdescription">Descubre nuevas oportunidades de éxito para tu empresa.</p>
          <br /><br />
       </Thumbnail>
       </div> 
        <LinkContainer to='/ayudamos/negocios' >
            <Button bsStyle="warning" style={buttonStyle} block>Más Información</Button>
          </LinkContainer>
     </Row>
    </Col>
  </Row>

</section>
