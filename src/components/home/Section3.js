import React from 'react';
import Img from '../../assets/fondo2-01.png'
import { Carousel } from 'react-bootstrap';

// Make a component of each Carousel.Item
// And iterate over it once received from bkEnd

const sectionStyle = {
  height: "70vh",
  backgroundImage: `url(${ Img })`,
  backgroundSize: "cover",
  // backgroundSize: '100% 100%',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  padding: 0
}

const carouselStyle = {
  height: "70vh",
  width: "100%",
  padding: '10% 25%',
  color: 'white'
}

var Ss3 = React.createClass({
  getInitialState( ) {
    return { index: 0, direction: null };
  },

  handleSelect( selectedIndex, e ) {
    // alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({ index: selectedIndex, direction: e.direction });
  },

  render( ) {

    // This should at some point be brought from bkEnd via REST
    var testimonials = [
      {
        id: 1,
        name: 'Francisco Díaz',
        position: 'Subgerente de Marketing, Enaex',
        comment: 'Nos han ayudado a darle un foco distinto a nuestra marca y también a hacer más eficiente los procesos de desarrollo de gestión de imagen, siempre con una actitud y disponibilidad inmediata. Estamos muy contentos por los resultados obtenidos gracias al compromiso fuerte que tienen por prestar un servicio de excelencia',
        link: ''
      }, {
        id: 2,
        name: '',
        position: '',
        comment: '',
        link: ''
      }, {
        id: 3,
        name: '',
        position: '',
        comment: '',
        link: ''
      }
    ];

    return (
      <section className="container-fluid" style={sectionStyle}>
        <h4 style={{color: 'yellow',
        position: 'absolute',
        paddingLeft: '45%'}}>Testimonios</h4>
        <div>
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
                  <button>VER CASO DE ÉXITO</button>
                </Carousel.Caption>
              </Carousel.Item>
            )}

            {/*<Carousel.Item>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>*/}

          </Carousel>
        </div>
      </section>
    );
  }
});

export default Ss3;
