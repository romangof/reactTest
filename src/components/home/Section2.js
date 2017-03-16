import React from 'react';
import Img1 from '../../assets/comunicaciones.png'
import Img2 from '../../assets/diseno.png'
import Img3 from '../../assets/ti.png'
import Img4 from '../../assets/modelos.png'
import {Row, Col, Thumbnail} from 'react-bootstrap';

const tittleStyle = {
    color: 'green',
    padding: '3% 0%',
}

const colStyle = {
    padding: "0% 4%",
    // height: '70px',
}

const imgStyle = {
    width: '75%',
    height: 'auto',
    padding: '3% 4%',
}

export default function Ss2() {
    return (
        <section className="container-fluid" style={{minHeight: "90vh", paddingTop: '3%'}}>
            {/*<Row>*/}
                <Col sm={12} style={tittleStyle}>
                    <h4><b>LÍNEAS DE NEGOCIO</b></h4>
                </Col>
            {/*</Row>*/}
            <Row>
                <Col xs={12} sm={3} style={colStyle}>
                    <Row>
                        <Thumbnail src={Img1} alt="10x10">
                            <h4>Comunicaciones y Marketing Digital</h4>
                            <p>Aumenta la visibilidad de tu marca, mejora su reputación online y consigue más conversiones.</p>
                        </Thumbnail>
                        {/*<div>
                            <img style={imgStyle} src={Img1} alt=""/>
                        </div>*/}
                    </Row>
                    {/*<Row><h4><b>Comunicaciones y Marketing Digital</b></h4></Row>
                    <Row><h4>Aumenta la visibilidad de tu marca, mejora su reputación online y consigue más conversiones className=""></conversiones></h4></Row>*/}
                </Col>

                <Col xs={12} sm={3} style={colStyle}>
                    <Row>
                        <Thumbnail src={Img2}>
                            <h4>Diseño e Identidad Corportativa</h4>
                            <p>Aumenta la capacidad de innovación y competitividad de tu empresa mediante diseño estratégico.</p>
                        </Thumbnail>
                        {/*<div>
                            <img style={imgStyle} src={Img2} alt=""/>
                        </div>*/}
                    </Row>
                    {/*<Row><h4><b>Diseño e Identidad Corportativa</b></h4></Row>
                    <Row><h4>Aumenta la capacidad de innovación y competitividad de tu empresa mediante diseño estratégico.</h4></Row>*/}
                </Col>

                <Col xs={12} sm={3} style={colStyle}>
                    <Row>
                        <div>
                            <img style={imgStyle} src={Img3} alt=""/>
                        </div>
                    </Row>
                    <Row><h4><b>Soluciones TI</b></h4></Row>
                    <Row><h4>Responde a los desafíos dinámicos del mercado con el uso de nuevas tecnologías.</h4></Row>
                </Col>

                <Col xs={12} sm={3} style={colStyle}>
                    <Row>
                        <div>
                            <img style={imgStyle} src={Img4} alt=""/>
                        </div>
                    </Row>
                    <Row><h4><b>Modelos de Negocios</b></h4></Row>
                    <Row><h4>Descubre nuevas oportunidades de éxito para tu empresa.</h4></Row>
                </Col>
            </Row>

        </section>
    );
}
