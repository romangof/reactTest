import React from 'react';
import Img from '../../assets/fondo2-01.png'
import {Carousel} from 'react-bootstrap';

// Make a component of each Carousel.Item
// And iterate over ir once received from bkEnd

const sectionStyle = {
    height: "70vh",
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    // backgroundSize: '100% 100%',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    padding: 0,
}

const carouselStyle = {
    height: "70vh",
    width: "100%",
}

var Ss3 = React.createClass ({
    getInitialState() {
        return {index: 0, direction: null};
    },

    handleSelect(selectedIndex, e) {
        // alert('selected=' + selectedIndex + ', direction=' + e.direction);
        this.setState({index: selectedIndex, direction: e.direction});
    },

    render() {
        return (
            <section className="container-fluid" style={sectionStyle}>
                <div>
                    <Carousel
                        activeIndex={this.state.index}
                        direction={this.state.direction}
                        onSelect={this.handleSelect}>
                        <Carousel.Item>
                            <div style={carouselStyle}>asdasdas</div>
                            {/*<img width={"100%"} height={"70vh"} src="/assets/carousel.png"/>*/}
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            {/*<img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>*/}
                            <div style={carouselStyle}>asdasdas</div>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={carouselStyle}>asdasdas</div>
                            {/*<img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>*/}
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
});
        
export default Ss3;
