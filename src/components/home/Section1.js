import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import Img from '../../assets/fondo-01.png'
// import Img2 from '../../assets/down.png'
// import Vid from '../../assets/ALintro5.mp4'

const sectionStyle = {
  // minHeight: "50vh",
  // color: 'white',
  // // padding: '20% 20% 0 20%',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-around',
  // alignItems: 'center',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  padding: "0",
  overflow: 'hidden'
}

const buttonStyle = {
  width: '35%',
  margin: '5% auto',
  borderRadius: '0',
}

const carouselStyle = {
  width: "100%",
  height: "100%",
  padding: '10vh 15% 5% 15%',
  fontSize: "1em",
  color: "#FFF"
}

// This could/should at some point be brought from bkEnd via REST
var slides = [
  {
    id: 1,
    title: 'AUMENTA LA VISIBILIDAD DE TU MARCA,',
    text: 'mejora tu reputación online y consigue  más conversiones con marketing digital',
    button: 'TE AYUDAMOS',
    buttonURL: '/contacto',
    styles: {
      text: {},
      button: {}
    },
    name: 'Francisco Díaz',
    position: 'Subgerente de Marketing, Enaex',
    comment: '"Nos han ayudado a darle un foco distinto a nuestra marca y también a hacer más eficiente los procesos de desarrollo de gestión de imagen, siempre con una actitud y disponibilidad inmediata. Estamos muy contentos por los resultados obtenidos gracias al compromiso fuerte que tienen por prestar un servicio de excelencia".'
  },
  {
    id: 2,
    title: 'TRANSFORMA TU EMPRESA CON SOLUCIONES TECNOLÓGICAS QUE TE AYUDARÁN A CRECER',
    text: 'a través de servicios innovadores de desarrollo de software, sitios web y aplicaciones móviles.',
    button: 'TE AYUDAMOS',
    buttonURL: '/contacto',
    styles: {
      text: {},
      button: {}
    },
    name: 'Rodolfo Saldias',
    position: 'Managing Director, Dorstener Latinoamérica SpA',
    comment: '"Este gran equipo nos apoyó en la creación de la imagen corporativa de nuestra nueva área de negocios. El desafío era lograr una imagen que comunicará de manera consistente la propuesta de valor a nuestro público objetivo y que a la vez se alineara con la identidad de nuestro grupo de empresas. El resultado cumple cabalmente con nuestras expectativas. Un grupo de trabajo serio, responsable y muy preocupado por cumplir nuestras necesidades".'
  },
  {
    id: 3,
    title: 'Únete a nuestra comunidad'.upcase,
    subtitle: 'y recibe  mensualmente recomendaciones, tendencias y mejores prácticas directamente en tu mail'.upcase,
    text: 'y recibe  mensualmente recomendaciones, tendencias y mejores prácticas directamente en tu mail',
    button: 'SUSCRIBIRSE',
    buttonURL: '/contacto',
    styles: {
      text: {},
      button: {}
    }
  },
  {
    id: 4,
    title: '¿Quieres hacer crecer tu negocio?'.upcase,
    subtitle: 'Suscríbete al blog y consigue todo el contenido que te ayudará a alcanzar tus metas'.upcase,
    text: 'Creemos en la transformación digital y queremos ser parte de este paso importante para tu negocio, para ello creamos este espacio con toda la información que necesitas para lograrlo.',
    button: 'SUSCRIBIRSE',
    buttonURL: '/contacto',
    styles: {
      text: {},
      button: {}
    }
  },
  {
    id: 5,
    title: '¡Únete a la transformación digital!'.upcase,
    subtitle: 'Te ayudamos con el desarrollo de una app para optimizar tus oportunidades y rentabilizar tu negocio.'.upcase,
    text: 'Visita nuestro portafolio y conoce cómo otras empresas han aplicado la tecnología con nuestra ayuda para mejorar sus resultados.',
    button: 'VER PORTAFOLIO',
    buttonURL: '/contacto',
    styles: {
      text: {},
      button: {}
    }
  }
];

var Ss1 = React.createClass({
  getInitialState() {
    return { index: 0, direction: null };
  },

  handleSelect( selectedIndex, e ) {
    this.setState({ index: selectedIndex, direction: e.direction });
  },

  render() {    
    return <section className="container-fluid" style={sectionStyle}>
      <div style={{background: 'red'}}>
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} indicators={false}>
          {slides.map((element) => 
            <Carousel.Item key={element.id}>
              <div style={carouselStyle}>
                <p><b>{element.name}</b></p>
                <p>{element.position}</p>
                <br/>
                <p>{element.comment}</p>
              </div>
              <LinkContainer to='/contacto' >
                <Button bsStyle="warning" bsSize="large" style={buttonStyle} block>¡DESAFÍANOS!</Button>
              </LinkContainer>
            </Carousel.Item>)
          }
        </Carousel>
      </div>
    </section>
  }
});

export default Ss1;



// export default () =>
// <section className="container-fluid" style={sectionStyle}>
//    <div id="background"> 
//     {/* <video muted loop autoPlay style={{backgroundSize: 'cover', minHeight: "100vh", minWidth: "100vw"}}>  
//       <source src={Vid} type="video/mp4" />
//     </video> */}
//   </div> 
//   <h1>
//     <b>SOMOS UNA TRANSFORMADORA DIGITAL</b>
//   </h1>
//   <h4 className="hometitle" style={{color:'white'}}>
//     que ofrece soluciones disruptivas a las medianas y grandes empresas a través de diseño, estrategias digitales e innovación tecnológica, para desafiar los anticuados modelos de negocio y diseñar las empresas del futuro.
//   </h4>
//   <LinkContainer to='/contacto' >
//     <Button bsStyle="warning" bsSize="large" style={buttonStyle} block>¡DESAFÍANOS!</Button>
//   </LinkContainer>
//   <Thumbnail src={Img2} style={thumbnailStyle}></Thumbnail>
// </section>