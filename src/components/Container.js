import React, { Component } from 'react';
import '../assets/css/app.css';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Container;
