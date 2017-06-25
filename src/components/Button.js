import React from 'react';

const Button = (props) => {
  if(props.newStatus) {
    return (
      <button onClick={() => props.handleClick(props.id, props.newStatus)}>{props.children}</button>
    )
  } else {
    return (
      <button className={props.className} onClick={() => {props.handleClick(props.id)}}>{props.children}</button>
    )
  }
}

export default Button;
