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
    textAlign: 'center',
}

export default function How ()  {
    return(
        <div id="circle">
            {/*<Col xs={12} sm={4} style={widgetStyle} >*/}
            <div>
                asd
                {/*<Image src={require('../../assets/desarrollamos.png')} responsive ></Image>*/}
            </div>
            {/*</Col>*/}
            {/*<Col xs={12} sm={4} smOffset={4} style={widgetStyle} >*/}
            <div>
                asdasdasds
                {/*<Image src={require('../../assets/creamos.png')} responsive ></Image>*/}
            </div>
            {/*</Col>*/}
            {/*<Col xs={12} sm={4} style={widgetStyle} >*/}
            <div>
                asd
                {/*<Image src={require('../../assets/estrategia.png')} responsive ></Image>*/}
            </div>
            {/*</Col>*/}
            {/*<Col xs={12} sm={4} smOffset={4} style={widgetStyle} >*/}
            <div>
                asd
                {/*<Image src={require('../../assets/tecnologia.png')} responsive ></Image>*/}
            </div>
            {/*</Col>*/}
        </div>
    );
}
