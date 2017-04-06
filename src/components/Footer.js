import React from 'react';

var sectionStyle = {
  height: '20vh',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgb(56, 152, 138)',
  // position: 'absolute', width: '100%', bottom: '0',
}

export default() => 
<section style={sectionStyle}>
  <br/>
                    <button class="btn btn-link" className="facebookbutton"></button>
                    <button class="btn btn-link" className="twitterbutton"></button>
                    <button class="btn btn-link" className="linkedinbutton"></button>
  <br/>
  <b>ACELERACIÓN LABS</b>
  <br/>
  <span>Magnere 1540, of. 901, Providencia, Santiago</span>
  <br/>
  <span>hola@aceleracion.cl</span>
</section>
