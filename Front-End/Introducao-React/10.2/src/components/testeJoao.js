import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Teste extends Component {
  render() {
    const { name, profissao, id } = this.props.name;
    return (
      <div>
        <p>{name}</p>
        <p>{profissao}</p>
        <p>{id}</p>
      </div>
    )
  }
}

Teste.propTypes = {
  name: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    profissao: PropTypes.string,
    id: PropTypes.string
  }))
}

export default Teste;
