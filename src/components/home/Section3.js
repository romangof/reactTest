import React, { Component } from 'react';
import Img from '../../assets/fondo2-01.png'
import { Carousel, Col } from 'react-bootstrap';

const titleStyle = {
    padding: '3% 0%'
}

const sectionStyle = {
  backgroundImage: `url(${ Img })`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  padding: "0",
  overflow: 'hidden'
}

const carouselStyle = {
  width: "100%",
  padding: '3vh 15% 5% 15%',
  fontSize: "1em",
  color: "#FFF"
}



  

export default class Ss3 extends Component {
  constructor() {
    super()
    this.state = { index: 0, direction: null }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect( selectedIndex, e ) {
    this.setState({ index: selectedIndex, direction: e.direction });
  }

  render() {
    // This should at some point be brought from bkEnd via REST
    var testimonials = [
      {
        id: 1,
        name: 'Francisco Díaz',
        position: 'Subgerente de Marketing, Enaex',
        comment: '"Nos han ayudado a darle un foco distinto a nuestra marca y también a hacer más eficiente los procesos de desarrollo de gestión de imagen, siempre con una actitud y disponibilidad inmediata. Estamos muy contentos por los resultados obtenidos gracias al compromiso fuerte que tienen por prestar un servicio de excelencia".',
        link: ''
      },
      {
        id: 2,
        name: 'Rodolfo Saldias',
        position: 'Managing Director, Dorstener Latinoamérica SpA',
        comment: '"Este gran equipo nos apoyó en la creación de la imagen corporativa de nuestra nueva área de negocios. El desafío era lograr una imagen que comunicará de manera consistente la propuesta de valor a nuestro público objetivo y que a la vez se alineara con la identidad de nuestro grupo de empresas. El resultado cumple cabalmente con nuestras expectativas. Un grupo de trabajo serio, responsable y muy preocupado por cumplir vuestras necesidades".',
        link: ''
       }
    ];

    const single = (
      <div style={carouselStyle}>
        <p><b>{testimonials[0].name}</b></p>
        <p>{testimonials[0].position}</p>
        <br/>
        <p>{testimonials[0].comment}</p>
        {/*<button className="homebutton homebutton1">VER CASO DE ÉXITO</button>*/}
      </div>)
    
    const carousel = (
      <Carousel direction={this.state.direction} onSelect={this.handleSelect} indicators={false}>
        {testimonials.map((element) => 
          <Carousel.Item key={element.id}>
            <div style={carouselStyle}>
              <p><b>{element.name}</b></p>
              <p>{element.position}</p>
              <br/>
              <p>{element.comment}</p>
            </div>
          </Carousel.Item>
        )}
      </Carousel>)

    return (
      <section className="container-fluid" style={sectionStyle}>
        <Col sm={12} style={titleStyle}>
          <h4 className="hometitle white"><b>TESTIMONIOS</b></h4>
        </Col>        
        <div>
          {(testimonials.length < 2) ? single:carousel}
        </div>
      </section>
    );
  }
}

