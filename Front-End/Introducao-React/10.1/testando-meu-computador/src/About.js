import React, { Component } from 'react';

class About extends Component {

  render() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'Jest', 'GitHub', 'React'];
    const skillRender = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
        <h1>Mario Bispo Junior</h1>
        <p>Olá, tenho 28 anos e estou me desafiando a cada dia mais no curso da trybe.</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          {skillRender}
        </ul>
      </div>
    )
  }
}

export default About;
