import React from 'react';

const Toggle = (props) => {

  return (
    <button onClick={props.handleClick} className="toggleButton">
      {props.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
