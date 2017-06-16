import React from 'react';
import Img from '../../assets/gracias.png';
import { Col, Thumbnail } from 'react-bootstrap';

var sectionStyles = {
  minHeight: '60vh',
  padding: '5%',
  textAlign: 'center',
}

var data = {
  contacto: {
    title: <b>¡Gracias por escribirnos, <br/>pronto estaremos conversando!</b>,
    text: {
      comunicaciones: <p>¿Buscas leads de calidad en tus estrategias de marketing? Entonces puede interesarte nuestro ebook <b>7 FORMAS DE GENERAR LEADS CUALIFICADOS B2B CON INBOUND MARKETING</b></p>,
      diseno: <p>¿Sabías que un buen diseño puede traer beneficios comerciales importantes a tu empresa? Entérate cómo descargando gratis el ebook <b>CÓMO EL DISEÑO PUEDE BENEFICIAR A TU NEGOCIO</b></p>,
      ti: <p>Mientras tanto, conoce cómo la tecnología puede transformar a las empresas para ayudar a lograr sus objetivos descargando gratis el ebook <b>TECNOLOGÍAS DE LA INFORMACIÓN EN LAS EMPRESAS</b></p>,
      negocios: <p>¿Está preparado tu negocio para los cambios actuales y futuros del ecosistema empresarial? Descarga gratis <b>GUÍA PARA LA TRANSFORMACIÓN DIGITAL DE LAS EMPRESAS</b> y explora la esencia de la transformación digital y cómo está presente en los distintos procesos del negocio.</p>,
    },
    link: {
      comunicaciones: 'https://drive.google.com/file/d/0B5zYuU9YaRXsSDlmWVB5dDBlZjQ/view?usp=sharing',
      diseno: 'https://drive.google.com/file/d/0B5zYuU9YaRXsYVNUcC0xdVdKdFU/view?usp=sharing',
      ti: 'https://drive.google.com/file/d/0B5zYuU9YaRXsMlBSZHFmamJQekk/view?usp=sharing',
      negocios: 'https://drive.google.com/file/d/0B5zYuU9YaRXsSkJzUGpOdjc0eU0/view?usp=sharing',
    }
  },
  newsletter: {
    title: <b>¡Te has suscrito a nuestro newsletter exitosamente! <br/>Ahora recibirás contenido valioso para tus estrategias de negocios.</b>,
    text: <p>Si tienes un desafío comercial específico, nos encantaría ayudarte</p>
  },
  ebook: {
    title: <b>Gracias por interesarte en nuestro ebook</b>,
    text: <p>Si quieres saber más de transformación digital desde la perspectiva de marketing, diseño estratégico, tecnología y negocios para aumentar la rentabilidad de tu empresa, escríbenos y conversamos</p>
  }
}

export default (props) => {
  var route = props.params.from;
  var spec = props.params.spec;
  function btn (params) {
    
  }

  return <section style={sectionStyles}>
    <title>{document.title = 'Gracias!'}</title>
    <Col>
      <Thumbnail src={Img} />
      <h3 style={{color: '#00A69C'}}>
        {(route && Object.keys(data).includes(route))?
            data[route].title : data.contacto.title}
      </h3>

      { route && 
        <div style={{width: '80%', paddingLeft: '20%'}} >
          {(route === 'contacto') ? data.contacto.text[spec] : data[route].text}
          <a href={data.contacto.link[spec]} target="_blank">
            <button className='homebutton' style={{backgroundColor:'orange', minWidth:"30%"}} >
              <b>{ (route !== 'contacto') ? 'CONTÁCTANOS':'DESCARGAR' }</b>
            </button>
          </a>
        </div>}
    </Col>
    <br/>
  </section>}