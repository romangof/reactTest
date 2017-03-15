import React from 'react';
import {div, Button} from 'react-bootstrap';

var sectionStyle = {
    height: '40vh',
    // width: '100%',
    backgroundColor: 'rgb(242, 160, 49)',
    paddingTop: '5vh'
}

const Ss4 = (props) => {
    return (
        <section style={sectionStyle}>
            <h3>NEWSLETTER</h3>
            <div>
                ¿Quieres que te ayudemos? <br/>
                Suscríbete a nuestro newsletter y podrías recibir un diagnóstico gratis.
            </div>
            <div>
                <input type="text" placeholder="Email" />
                <Button>LO QUIERO</Button>
            </div>
        </section>
    );
}

export default Ss4;