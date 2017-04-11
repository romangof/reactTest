import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default () => 
<div>

  <div style={{paddingLeft: '15%'}} >
    <Col xs={12} md={8}>
      <h3 className={'titleHow'}>
        te ayudamos
      </h3>
      <p className={'maindescriptionHow'}>
        Transformamos digitalmente a las empresas desde adentro hacia afuera a través de la reinvención del modelo de negocio, la imagen, la experiencia y el uso de las nuevas tecnologías.
      </p>
    </Col>
  </div>

  <div className="container_circulo">
    <Row>
      <Col sm={6} md={6} className={'colHow'}>
        <div className={'itemHow'}>
          <Image className={'imgHow'} src={require("../../assets/bussinesHow.png")} />
          <div className="descriptionHow">
            <h3>desarrollamos negocios</h3>
            <h4>Para encontrar oportunidades de éxito</h4>
          </div>
        </div>
      </Col>
      
      <Col sm={6} md={6} className={'colHow'}>
        <div className={'itemHow'}>
          <Image className={'imgHow'} src={require("../../assets/createHow.png")} />
          <div className="descriptionHow">
            <h3>creamos tu imagen</h3>
            <h4>Para aumentar la capacidad de innovación y competitividad</h4>
          </div>
        </div>
      </Col>
      
      <Col sm={6} md={6} className={'colHow'}>
        <div className={'itemHow'}>
          <Image className={'imgHow'} src={require("../../assets/designHow.png")} />
          <div className="descriptionHow">
            <h3>diseñamos una estrategia</h3>
            <h4>Para posicionar tu marca y generar conversiones</h4>
          </div>
        </div>
      </Col>
      
      <Col sm={6} md={6} className={'colHow'}>
        <div className={'itemHow'}>
          <Image className={'imgHow'} src={require("../../assets/tiHow.png")} />
          <div className="descriptionHow">
            <h3>usamos tecnología</h3>
            <h4>Para responder a los desafíos dinámicos del mercado</h4>
          </div>
        </div>
      </Col>
    </Row>
  </div>

</div>
