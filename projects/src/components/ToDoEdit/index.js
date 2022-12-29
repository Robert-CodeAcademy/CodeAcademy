import React from "react";
import "./index.css";

function ToDoEdit({ data, index, handleEdit }) {
  return (
    <div className="to-do-card-container">
      <div className="to-do-card-text">{data}</div>
      <button onClick={() => handleEdit(index)}>Edit</button>
    </div>
  );
}

export default ToDoEdit;
