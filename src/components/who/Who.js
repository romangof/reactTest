import React from 'react';
import { Helmet } from "react-helmet";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

export default () =>
<div>
  <Helmet>
    <title>Quiénes somos | Aceleración Labs</title>
    <meta name="Description" content="Somos un holding de empresas que brindan una oferta de servicio all in one de diseño, estrategias digitales e innovación tecnológica." />
  </Helmet>
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
</div>
