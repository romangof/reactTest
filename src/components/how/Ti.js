import React from 'react';
import { Col, Image } from 'react-bootstrap';

export default () => 
<div>
  <section className={'sectionsHow'} style={{
    textAlign: 'left',
    overflow: 'hidden', 
    height: '100%',
    }}>
    <Col xs={12} sm={4} smOffset={1} style={{padding: '5%'}}>
      <Image src={require( '../../assets/ti.png' )} responsive/>
    </Col>
    <Col xs={11} sm={4} smOffset={1} style={{padding: '5%'}}>
      <h4 style={{color: 'green'}}>Title</h4>
      <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor deserunt sequi, alias officia voluptatum aliquam corrupti necessitatibus velit ratione veniam, soluta fugit reprehenderit, numquam sed excepturi quia ipsa totam saepe?</p>
      <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati incidunt ipsam magnam, suscipit praesentium sint soluta reprehenderit eos.</p>
      <br/>
      <button>conversemos</button>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden', 
    height: '100%',
    padding: '5% 0%',
    textAlign: 'left',
    backgroundColor: 'rgb(247, 246, 246)'}} >

    <Col xs={12} sm={6} smOffset={3} >
      <h3 style={{color: 'purple'}}>TITLE</h3>
      <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur quia voluptatem in nisi quos, quisquam eveniet corporis recusandae repudiandae ullam nulla, molestias non laudantium iste quod aliquid reprehenderit neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur quia voluptatem in nisi quos, quisquam eveniet corporis recusandae repudiandae ullam nulla, molestias non laudantium iste quod aliquid reprehenderit neque.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur quia voluptatem in nisi quos, quisquam eveniet corporis recusandae repudiandae ullam nulla, molestias non laudantium iste quod aliquid reprehenderit neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur quia voluptatem in nisi quos, quisquam eveniet corporis recusandae repudiandae ullam nulla, molestias non laudantium iste quod aliquid reprehenderit neque.</p>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden',
    height: '100%',
    padding: '5% 0%',
    textAlign: 'left'}} >
    <Col xs={12} sm={9} smOffset={3}>
      <h3 style={{color: 'green', paddingBottom: '5%'}}>TITLE</h3>
    </Col>
    <br/>
    <br/>
    <Col xs={12} sm={3} smOffset={3}>
      <b>subtitle</b>
      <ul>
        <li>Campañas offline</li>
        <br/>
        <li>Comunicación corporativa</li>
        <br/>
        <li>Marketing directo</li>
        <li>Estrategias comunicacionales</li>
        <li>Branding</li>
      </ul>
    </Col>
    <Col xs={12} sm={3}>
      <b>subtitle</b>
      <ul>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
      </ul>
    </Col>
  </section>

  <section style={{
    overflow: 'hidden',
    height: '100%',
    padding: '5% 0%',
    textAlign: 'center',
    backgroundColor: 'rgb(247, 246, 246)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    }}>

    asd
    <br/> 
    asdasd
    <button>asdasd</button>
  </section>
</div>;
