import React from 'react';
import Img from '../assets/fondo-01.png'
// import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils'
import {Col, Button} from 'react-bootstrap';

// var Row = require('react-bootstrap').Row;
// var Col = require('react-bootstrap').Col;
// var Button = require('react-bootstrap').Button;

// bUtils.addStyle(Button, 'custom'); const bsStyle = {     borderRadius: 0,
// bottom: 0 }

const sectionStyle = {
    height: "100vh",
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    // backgroundSize: '100% 100%',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
}

export default function Ss1() {
    return (
        <section className="container-fluid" style={sectionStyle}>
            <Col sm={6} smOffset={3} className="v-center">
                {/*<Row className="ss1">*/}
                <Col sm={12}>
                    <h3>
                        <b>SOMOS UNA TRANSFORMADORA DIGITAL</b>
                    </h3>
                </Col>
                {/*</Row>*/}
                {/*<Row className="ss1">*/}
                <Col sm={12}>
                    <h4>
                        que ofrece soluciones disruptivas a las medianas y grandes empresas a través de diseño, estrategias digitales e innovación tecnológica, para desafiar los anticuados modelos de negocio y diseñar las empresas del futuro.
                    </h4>
                </Col>
                {/*</Row>*/}
                {/*<Row className="ss1">*/}
                <Col sm={12} style={{position: 'absolute', bottom:'20%'}}>
                    <Button bsStyle="warning" bsSize="large" block>DESAFÍANOS!</Button>
                </Col>
                {/*</Row>*/}
            </Col>
        </section>
    );
}
