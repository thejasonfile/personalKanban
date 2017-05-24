import React, { Component } from 'react';

class Note extends Component {
  render(props) {
    const style = {
      backgroundColor: this.props.color
    }
    return (
      <div style={style}>
        {this.props.content}
      </div>
    );
  }
}

export default Note;
