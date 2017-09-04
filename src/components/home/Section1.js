import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import slidebg1 from '../../assets/slidebg1.png'
import slidebg2 from '../../assets/slidebg2.png'
import slidebg3 from '../../assets/slidebg3.png'
// import slidebg4 from '../../assets/slidebg4.png'
// import slidebg5 from '../../assets/slidebg5.png'

// import Vid from '../../assets/ALintro5.mp4'

const sectionStyle = {
  // minHeight: "50vh",
  // color: 'white',
  // // padding: '20% 20% 0 20%',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-around',
  // alignItems: 'center',
  padding: "0",
  overflow: 'hidden'
}

// const buttonStyle = {
//   width: '35%',
//   margin: '5% auto',
//   borderRadius: '0',
// }

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
    styles: {
      title: {fontSize: "40px", fontWeight:"bolder",maxWidth:"500px", textAlign: "left", lineHeight:"40px",},
      subtitle: {fontSize: "22px" ,maxWidth:"500px", textAlign: "left", lineHeight:"30px",},
      button: {width: "300px", margin: "2vh auto 10vh 0", borderRadius: "0", border: "none", background: "#A51976", fontWeight:"bolder",},
      self: {
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ slidebg1 })`
      }
    },
  },
  // {
  //   id: 2,
  //   title: "TRANSFORMA TU EMPRESA CON SOLUCIONES TECNOLÓGICAS QUE TE AYUDARÁN A CRECER",
  //   subtitle: 'a través de servicios innovadores de desarrollo de software, sitios web y aplicaciones móviles.',
  //   button: 'TE AYUDAMOS',
  //   buttonURL: '/contacto',
  //   styles: {
  //     title: {fontSize: "28px", fontWeight:"bolder", textAlign: "right", lineHeight:"40px", margin: "0 auto 0 20vw",},
  //     subtitle: {fontSize: "24px" , textAlign: "right", lineHeight:"40px", margin: "0 auto 0 30vw",},
  //     button: {width: "300px", margin: "0 15vw 10vh auto", borderRadius: "0", border: "none", color: "#A51976", background:"#F9AE4C", fontWeight:"bolder",},
  //     self: {
  //       height: "100%",
  //       textAlign: "right",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //       backgroundImage: `url(${ slidebg2 })`
  //     }
  //   },
  // },
  {
    id: 3,
    title: 'Únete a nuestra comunidad',
    subtitle: 'y recibe  mensualmente recomendaciones, tendencias y mejores prácticas directamente en tu mail',
    text: 'Queremos ayudarte a través de contenido único de valor preparado por nuestro equipo de profesionales para ayudarte a alcanzar tus metas comerciales.',
    button: 'SUSCRIBIRME',
    buttonURL: `/contacto?utm_source=HomeAL&utm_medium=slide1&utm_campaign=${"leadsnewsletter"}`,
    styles: {
      title: {fontSize: "40px", fontWeight:"bolder", textAlign: "center", textTransform:"uppercase", lineHeight:"40px", margin: "0 auto",},
      subtitle: {fontSize: "22px" , fontWeight:"bolder", textAlign: "center", textTransform:"uppercase", lineHeight:"30px", margin: "2vh 12vw",},
      text: {fontSize: "18px" , textAlign: "center", lineHeight:"20px", margin: "0 12vw",},
      button: {width: "300px", margin: "2vh auto 10vh auto", borderRadius: "0", border: "none", color: "#FFF", background:"#00A69C", fontWeight:"bolder",},
      self: {
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ slidebg3 })`
      }
    }
  },
  // {
  //   id: 4,
  //   title: '¿Quieres hacer crecer tu negocio?',
  //   subtitle: 'Suscríbete al blog y consigue todo el contenido que te ayudará a alcanzar tus metas',
  //   text: 'Creemos en la transformación digital y queremos ser parte de este paso importante para tu negocio, para ello creamos este espacio con toda la información que necesitas para lograrlo.',
  //   button: 'SUSCRIBIRSE',
  //   buttonURL: '/contacto',
  //   styles: {
  //     title: {fontSize: "28px", fontWeight:"bolder", textAlign: "center", textTransform:"uppercase", lineHeight:"40px", margin: "0 auto",},
  //     subtitle: {fontSize: "24px" , textAlign: "center", textTransform:"uppercase", lineHeight:"30px", margin: "3vh 15vw",},
  //     text: {fontSize: "18px" , textAlign: "center", lineHeight:"30px", margin: "0 12vw",},
  //     button: {width: "300px", margin: "0 auto 10vh auto", borderRadius: "0", border: "none", color: "#FFF", background:"#F9AE4C", fontWeight:"bolder",},
  //     self: {
  //       height: "100%",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //       backgroundImage: `url(${ slidebg4 })`
  //     }
  //   }
  // },
  {
    id: 5,
    title: '¡Únete a la transformación digital!',
    subtitle: 'Te ayudamos con el desarrollo de una app para optimizar tus oportunidades y rentabilizar tu negocio.',
    button: 'CONTÁCTANOS',
    buttonURL: `/contacto?utm_source=HomeAL&utm_medium=slide1&utm_campaign=${"leadsapps"}`,
    styles: {
      title: {fontSize: "37px", fontWeight:"bolder", textAlign: "center", textTransform:"uppercase", lineHeight:"40px", margin: "0 auto",},
      subtitle: {fontSize: "22px" , textAlign: "center", textTransform:"uppercase", lineHeight:"30px", margin: "3vh 8vw",},
      text: {fontSize: "18px" , textAlign: "center", lineHeight:"30px", margin: "0 12vw",},
      button: {width: "300px", margin: "1vh auto 10vh auto", borderRadius: "0", border: "none", color: "#FFF", background:"#A51976", fontWeight:"bolder",},
      self: {
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ slidebg2 })`
      }
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
      <div>
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} indicators={false}>
          {slides.map((element) => 
            <Carousel.Item key={element.id} style={element.styles.self}>
              <div style={carouselStyle}>
                <p style={element.styles.title}>{element.title}</p>
                <p style={element.styles.subtitle}>{element.subtitle}</p>
                <br/>
                <p style={element.styles.text}>{element.text}</p>
              <LinkContainer to={element.buttonURL} >
                <Button bsStyle="warning" bsSize="large" style={element.styles.button} block>{element.button}</Button>
              </LinkContainer>              
              </div>
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