import React from 'react';
import Img from '../../assets/gracias.png';
import { Col, Thumbnail } from 'react-bootstrap';

var sectionStyles = {
  minHeight: '60vh',
  padding: '5%',
  textAlign: 'center',
}

var thxNewsletter = <b>¡Te has suscrito a nuestro newsletter exitosamente! <br/>Ahora recibirás contenido valioso para tus estrategias de negocios.</b>
var thxContact = <b>¡Gracias por escribirnos, <br/>pronto estaremos conversando!</b>

// var asd = <button>asd</button>

export default (props) => 
<section style={sectionStyles}>
  <title>{document.title = 'Gracias!'}</title>
  <Col>
    <Thumbnail src={Img} />
      <h3 style={{color: '#00A69C'}}>
        {(props.params.from !== 'newsletter') ? thxContact:thxNewsletter}
      </h3>
{/*
      { () => {console.log('am i running')} }
      { console.log('aqui') }
      { console.log(true?true:false) }
      { ((props) => {console.log(props); return ('123')})(props.params.from) }*/}
  </Col>
  <br/>
</section>