import React, { Component } from 'react';
import Teste from './testeJoao';
import obj from '../data'

class TesteObj extends Component {
  render() {
    return (
      <div>
        {obj.map((item,indice) => <Teste key={indice} name={item} />)}
      </div>
    );
  }
}

export default TesteObj;
