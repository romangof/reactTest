import React from 'react';

const sectionStyle = {
    minHeight: '70vh',
    padding: '5% 0%',
    textAlign: 'center',
    backgroundColor: 'rgb(247, 246, 246)',
}

export default function Section2 ()  {
    return (
        <section style={sectionStyle}>
            <h3 style={{color: 'purple'}}><strong>QUEREMOS</strong></h3>
            <br/>
            <div style={{color: 'gray'}}>
                <h2>Convertirnos en tu brazo armado</h2>
                <h2>Desafiar los anticuados modelos de negocio</h2>
                <h2>Mejorar o transformar tu empresa</h2>
                <h2>Mejorar o transformar tu empresa</h2>
                <h2>Diseñar las empresas del futuro</h2>
            </div>
        </section>
    );
};
