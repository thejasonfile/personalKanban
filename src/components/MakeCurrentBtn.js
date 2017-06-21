import React from 'react';

const MakeCurrentBtn = (props) => {
  return (
    <button onClick={() => props.changeStatus(props.id, 'current')}>Make Current</button>
  )
}

export default MakeCurrentBtn;
