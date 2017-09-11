import React, { Component } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import slidebg1 from '../../assets/slidebg1.png'
import slidebg2 from '../../assets/slidebg2.png'
import slidebg3 from '../../assets/slidebg3.png'
import slidebg4 from '../../assets/slidebg4.png'
// import slidebg5 from '../../assets/slidebg5.png'
import './Section1.css'

const sectionStyle = {
  padding: "0",
  overflow: 'hidden'
}

const carouselStyle = {
  width: "100%",
  height: "650px",
  padding: '22vh 15% 5% 15%',
  fontSize: "1em",
  color: "#FFF"
}

// This could/should at some point be brought from bkEnd via REST
var slides = [
  {
    id: 1,
    title: 'AUMENTA LA VISIBILIDAD DE TU MARCA,',
    subtitle: 'mejora tu reputación online y consigue  más conversiones con marketing digital',
    button: 'TE AYUDAMOS',
    buttonURL: `/contacto?utm_source=HomeAL&utm_medium=slide1&utm_campaign=${"leadsmarketing"}`,
    self: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ slidebg1 })`
    }
  },
  {
    id: 2,
    title: "TRANSFORMA TU EMPRESA CON SOLUCIONES TECNOLÓGICAS QUE TE AYUDARÁN A CRECER",
    subtitle: 'a través de servicios innovadores de desarrollo de software, sitios web y aplicaciones móviles.',
    button: 'TE AYUDAMOS',
    buttonURL: 'http://blog.aceleracion.cl/casos-de-exito?utm_source=AL&utm_medium=SlideHome&utm_campaign=Blog',
    self: {
      height: "100%",
      textAlign: "right",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ slidebg4 })`
    }
  },
  {
    id: 3,
    title: 'Únete a nuestra comunidad',
    subtitle: 'y recibe  mensualmente recomendaciones, tendencias y mejores prácticas directamente en tu mail',
    text: 'Queremos ayudarte a través de contenido único de valor preparado por nuestro equipo de profesionales para ayudarte a alcanzar tus metas comerciales.',
    button: 'SUSCRIBIRME',
    buttonURL: `/contacto?utm_source=HomeAL&utm_medium=slide1&utm_campaign=${"leadsnewsletter"}`,
    self: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ slidebg3 })`
    }
  },
  // {
  //   id: 4,
  //   title: '¿Quieres hacer crecer tu negocio?',
  //   subtitle: 'Suscríbete al blog y consigue todo el contenido que te ayudará a alcanzar tus metas',
  //   text: 'Creemos en la transformación digital y queremos ser parte de este paso importante para tu negocio, para ello creamos este espacio con toda la información que necesitas para lograrlo.',
  //   button: 'SUSCRIBIRSE',
  //   buttonURL: '/contacto',
  //   self: {
  //     height: "100%",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     backgroundImage: `url(${ slidebg4 })`
  //   }
  // },
  {
    id: 5,
    title: '¡Únete a la transformación digital!',
    subtitle: 'Te ayudamos con el desarrollo de una app para optimizar tus oportunidades y rentabilizar tu negocio.',
    button: 'CONTÁCTANOS',
    buttonURL: `/contacto?utm_source=HomeAL&utm_medium=slide1&utm_campaign=${"leadsapps"}`,
    self: {
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ slidebg2 })`
    }
  }
]

export default class Ss1 extends Component {
  constructor() {
    super()
    this.state = { index: 0, direction: null }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect( selectedIndex, e ) {
    this.setState({ index: selectedIndex, direction: e.direction })
  }

  button(elem){
    if (elem.buttonURL.indexOf("http://") === 0) {
      return <Button bsStyle="warning" bsSize="large" className={'button'} href={elem.buttonURL} block>{elem.button}</Button>
    } else {
      return <LinkContainer to={elem.buttonURL} >
        <Button bsStyle="warning" bsSize="large" className={'button'} block>{elem.button}</Button>
      </LinkContainer> 
    }
  }

  render() {    
    return <section className="container-fluid" style={sectionStyle}>
      <div>
        <Carousel direction={this.state.direction} onSelect={this.handleSelect} indicators={false} >
          {slides.map((element) => 
            <Carousel.Item key={element.id} style={element.self}>
              <div className={`section${element.id}`} style={carouselStyle}>
                <p className={'title'}>{element.title}</p>
                <p className={'subtitle'}>{element.subtitle}</p>
                <br/>
                <p className={'text'}>{element.text}</p>
                {this.button(element)}
              </div>
            </Carousel.Item>)
          }
        </Carousel>
      </div>
    </section>
  }
};
