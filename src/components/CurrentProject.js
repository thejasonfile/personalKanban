import React, { Component } from 'react';
import '../assets/css/app.css';

class CurrentProject extends Component {
  render() {
    return (
      <div className="container currentProject">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default CurrentProject;
