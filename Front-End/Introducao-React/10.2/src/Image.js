import React, { Component } from 'react';
import './App.css'

class Image extends Component {
  render() {
    return <img className='image' src={this.props.source} alt={this.props.alternativeText}/>
  }
}

export default Image;
