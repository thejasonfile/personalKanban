import React from 'react';

const RadioButton = ({name, color, changeSelectedColor}) => {
  return (
      <div>
        <input
          type="radio"
          name={name}
          value={color}
          onChange={() => changeSelectedColor(color)}
        ></input>
        <span>{color}</span>
      </div>
  );
}

export default RadioButton;
