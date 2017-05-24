import React, { Component } from 'react';
import '../assets/css/app.css';

class RadioButton extends Component {
  render() {
    return (
      <div>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.color}
        ></input>
      {this.props.color}
      </div>
    );
  }
}

export default RadioButton;
