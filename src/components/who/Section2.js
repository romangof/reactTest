import React from 'react';

const sectionStyle = {
    minHeight: '60vh',
    padding: '3% 0%',
    textAlign: 'center',
    backgroundColor: 'rgb(247, 246, 246)',
    fontFamily : "Raleway-regular",
}

export default () =>  
<section style={sectionStyle}>
    <h3 style={{color: 'purple'}}><strong>QUEREMOS</strong></h3>
    <br/>
    <div style={{color: 'gray'}}>
        <h3>Convertirnos en tu brazo armado</h3>
        <h3>Desafiar los anticuados modelos de negocio</h3>
        <h3>Mejorar o transformar tu empresa</h3>
        <h3>Construir capacidad de innovación</h3>
        <h3>Diseñar las empresas del futuro</h3>
    </div>
</section>;
