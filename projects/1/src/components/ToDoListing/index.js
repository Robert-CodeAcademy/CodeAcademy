import React from "react";
import ToDoCard from "../ToDoCard";
import "./index.css";

function ToDoListing({ data, handleCompleted, handleEdit }) {
  return (
    <div className="to-do-listing-container">
      {data.map((item, index) => {
        return (
          <ToDoCard
            key={index}
            data={item}
            index={index}
            handleCompleted={handleCompleted}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}

export default ToDoListing;
