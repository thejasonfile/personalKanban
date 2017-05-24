import React from 'react';

const AddButton = ({addNote, noteNumber, noteColor, noteContent}) => {
  return (
    <div>
      <button onClick={() => addNote({key: noteNumber, content: noteContent, color: noteColor})} >+</button>
    </div>
  )
};

export default AddButton;
