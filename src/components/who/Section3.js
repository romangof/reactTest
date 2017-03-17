import React from 'react';
import { Col } from 'react-bootstrap';

const sectionStyle = {
    minHeight: '70vh',
    padding: '5% 0%',
    textAlign: 'center',
    // backgroundColor: 'rgb(247, 246, 246)',
}

export default function Section3 ()  {
    return (
        <section style={sectionStyle}>
            <Col xs={12} sm={5} smOffset={1} style={{color: 'orange', textAlign: 'left', paddingLeft: '10%', fontSize: '80px', lineHeight: '72px'}}>
                <div>WE</div>
                <div>GET</div>
                <div>SHIT</div>
                <div><b>DONE</b></div>
            </Col>
            <Col xs={12} sm={5} style={{padding: '5% 8%'}} >
                <div>
                    <p>Estamos unidos por un apetito insaciable de ideas e innovación, la pasión que sentimos por nuestro trabajo y las ganas de enfrentar nuevos desafíos.</p>

                    <br/>

                    <p>Averigua todo lo que podemos hacer por ti</p>

                    <br/>

                    <button>CONTÁCTANOS</button>
                </div>
            </Col>
        </section>
    );
};
