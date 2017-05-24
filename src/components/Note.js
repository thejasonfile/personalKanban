import React, { Component } from 'react';

class Note extends Component {
  render(props) {
    const style = {
      backgroundColor: this.props.color
    }
    return (
      <div style={style}>
        {this.props.content}
        <button>Make Current</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Note;
