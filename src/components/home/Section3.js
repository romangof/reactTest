import React from 'react';
import Img from '../../assets/fondo2-01.png'
import { Carousel, Col } from 'react-bootstrap';

// Make a component of each Carousel.Item
// And iterate over it once received from bkEnd

const titleStyle = {
    padding: '3% 0%'
}

const sectionStyle = {
  height: "55vh",
  backgroundImage: `url(${ Img })`,
  backgroundSize: "cover",
  // backgroundSize: '100% 100%',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  padding: 0,
  overflow: 'hidden'
}

const carouselStyle = {
  height: "60vh",
  width: "100%",
  padding: '1vh 15%',
  // color: 'white',
  fontFamily : "Raleway-regular",
  fontSize: "14px",
  color: "#FFF"
}

var Ss3 = React.createClass({
  getInitialState() {
    return { index: 0, direction: null };
  },

  handleSelect( selectedIndex, e ) {
    // alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({ index: selectedIndex, direction: e.direction });
  },

  render() {

    // This should at some point be brought from bkEnd via REST
    var testimonials = [
      {
        id: 1,
        name: 'Francisco Díaz',
        position: 'Subgerente de Marketing, Enaex',
        comment: '"Nos han ayudado a darle un foco distinto a nuestra marca y también a hacer más eficiente los procesos de desarrollo de gestión de imagen, siempre con una actitud y disponibilidad inmediata. Estamos muy contentos por los resultados obtenidos gracias al compromiso fuerte que tienen por prestar un servicio de excelencia".',
        link: ''
      }
    //   }, {
    //     id: 2,
    //     name: '',
    //     position: '',
    //     comment: '',
    //     link: ''
    //   }, {
    //     id: 3,
    //     name: '',
    //     position: '',
    //     comment: '',
    //     link: ''
    //   }
    ];

    const single = (
      <div style={carouselStyle}>
        <p><b>{testimonials[0].name}</b></p>
        <p>{testimonials[0].position}</p>
        <br/>
        <p>{testimonials[0].comment}</p>
        <button className="homebutton1">VER CASO DE ÉXITO</button>
      </div>)
    
    const carousel = (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        {testimonials.map((element) => 
          <Carousel.Item key={element.id}>
            <div style={carouselStyle}>
              <p><b>{element.name}</b></p>
              <p>{element.position}</p>
              <br/>
              <p>{element.comment}</p>
            </div>
            {/*<img width={"100%"} height={"70vh"} src="/assets/carousel.png"/>*/}
            <Carousel.Caption>
              {/*<h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
              <button className="homebutton1">VER CASO DE ÉXITO</button>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>)

    return (
      <section className="container-fluid" style={sectionStyle}>
        <Col sm={12} style={titleStyle}>
          <h4 className="hometitle2"><b>TESTIMONIOS</b></h4>
        </Col>        
        <div>
          {/*{console.log(testimonials.length)}*/}
          {(testimonials.length < 2) ? single:carousel}
        </div>
      </section>
    );
  }
});

export default Ss3;
