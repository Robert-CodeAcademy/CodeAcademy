import React from "react";
import "./index.css";

function ToDoCard({ data, index, handleCompleted, handleEdit }) {
  return (
    <div className="to-do-card-container">
      <div className="to-do-card-text">{data}</div>
      <button onClick={() => handleCompleted(false, data)}>Completed</button>
      <button onClick={() => handleEdit(index)}>Edit</button>
    </div>
  );
}

export default ToDoCard;
