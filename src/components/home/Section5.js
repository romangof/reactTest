import React from 'react';
import {Col} from 'react-bootstrap';

var sectionStyle = {
    height: '50vh',
    color: 'rgb(242, 160, 50)',
    padding: '5% 0%',
}

export default () =>  
<section style={sectionStyle}>
    loopThis
    <div style={{paddingTop: '5%', color: 'gray'}}>
        <Col xs={6} sm={2} smOffset={1}>Logo Img 1</Col>
        <Col xs={6} sm={2}>Logo Img 2</Col>
        <Col xs={6} sm={2}>Logo Img 3</Col>
        <Col xs={6} sm={2}>Logo Img 4</Col>
        <Col xs={6} sm={2}>Logo Img 5</Col>
        <Col xs={6} sm={2} smOffset={1}>Logo Img 6</Col>
        <Col xs={6} sm={2}>Logo Img 7</Col>
        <Col xs={6} sm={2}>Logo Img 8</Col>
    </div>
</section>