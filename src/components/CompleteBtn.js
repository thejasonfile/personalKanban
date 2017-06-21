import React from 'react';

const CompleteBtn = (props) => {
  return (
    <button onClick={() => props.changeStatus(props.id, 'complete')}>Complete</button>
  )
}

export default CompleteBtn;
