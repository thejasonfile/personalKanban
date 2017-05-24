import React from 'react';

const AddButton = ({addNote, noteColor, noteContent}) => {
  return (
    <div>
      <button onClick={() => addNote({content: noteContent, color: noteColor})} >+</button>
    </div>
  )
};

export default AddButton;
