import { useState } from "react";
import React from "react";
import "./adder.css"

const Adder = ({onAdd}) => {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleClick(event) {
    onAdd(inputValue);
    setInputValue("")
  }
  return (
    <div className="adder">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default Adder;