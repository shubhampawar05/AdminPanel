import React from "react";

import './style.css';

function InputControl(props) {
  // console.log({...props});
  return (
    <div className='input_container'>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;