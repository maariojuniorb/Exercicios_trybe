import React, { Component } from 'react';
import './App.css'

class Greeting extends Component {
  render() {
    return <h1 className='title'>Olá {this.props.name} {this.props.lastName}</h1>
  }
}

export default Greeting;
