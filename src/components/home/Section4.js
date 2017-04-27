import React from 'react';
import { Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import runtimeEnv from '@mars/heroku-js-runtime-env'

var sectionStyle = {
    height: '45vh',
    backgroundColor: 'rgb(242, 160, 49)',
    paddingTop: '2vh',
    fontSize: "1.2em",
}

export default class Ss4 extends React.Component {
  constructor(props) {
    super();
    this.state = { data: {} };
    this.handleChange = this.handleChange.bind(this);
    this.post = this.post.bind(this);
  }

  handleChange(e) {
    var data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({data: data});
  }
  
  post (e) {
    e.preventDefault();
    const env = runtimeEnv();
    var data = this.state.data;
    // var api = 'http://localhost:3001/api'
    if ( data.email ) {
      // fetch(`${api}/newsletters`, {
      fetch(`${env.REACT_APP_API_URL}/newsletters`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({newsletter: data})
      })
      .then((response) => {
        if(response.ok) {
          browserHistory.push('/gracias/newsletter');
        } else {
          console.log("Is that a valid email?");
          return response.json();
        }
      })
      // .then((response) => {console.log(response.error)})
      .catch((error) => {console.log(error)})
    }
  }

  render(){
    return <section style={sectionStyle}>
      <Col sm={12} style={{padding: '2% 0%'}}>
        <h4 className="hometitle dark"><b>NEWSLETTER</b></h4>
      </Col>

      <div >
        <p className="descriptionHome">¿Quieres que te ayudemos?
          <br/>
          Suscríbete a nuestro newsletter y podrías recibir un diagnóstico gratis.
        </p>
      </div>

      <form>
        <input className="homeinput" type="email" name="email" placeholder="Email" onChange={this.handleChange} />
        <button onClick={this.post} type="submit" className="homebutton homebutton2">LO QUIERO</button>
      </form>
    </section>
  }
};
