import React, { useState } from "react";

function ToDoInput({ getValue, plcHolderTxt, btnTxt, handleCompleted }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div>
        <input
          value={input}
          placeholder={plcHolderTxt}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => handleCompleted(true, input)}>Search</button>
      </div>
      <button onClick={() => getValue(input)}>{btnTxt}</button>
    </>
  );
}

export default ToDoInput;
