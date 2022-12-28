import React, { useState } from "react";
import ToDoHeader from "../../components/ToDoHeader";
import ToDoInput from "../../components/ToDoInput";
import ToDoListing from "../../components/ToDoListing";
import "./ToDoList.css";

function ToDoList() {
  const [plcHolderTxt, setPlcHolderTxt] = useState("Enter a task");
  const [btnTxt, setBtnTxt] = useState("Add new to do");

  const [niza, setNiza] = useState([
    "frli gjubre",
    "napisi domasna",
    "slusaj shto zbori bojan",
    "cisti ja sobata",
  ]);

  const [indx, setIndx] = useState(niza.length);

  const getValue = (data) => {
    niza[indx] = data;
    setNiza([...niza]);
    setPlcHolderTxt("Enter a task");
    setBtnTxt("Add new to do");
  };

  const handleCompleted = (bool, data) => {
    let copy = [];
    copy = bool
      ? niza.filter((element) => element.includes(data))
      : niza.filter((element) => !element.includes(data));
    setNiza(copy);
    setIndx(copy.length);
  };

  const handleEdit = (index) => {
    setPlcHolderTxt(niza[index]);
    setBtnTxt("Update");
    setIndx(index);
  };

  return (
    <div className="to-do-list-container">
      <ToDoHeader title={"Welcome to my first app"} />
      <ToDoInput
        getValue={getValue}
        plcHolderTxt={plcHolderTxt}
        btnTxt={btnTxt}
        handleCompleted={handleCompleted}
      />
      <ToDoListing
        data={niza}
        handleCompleted={handleCompleted}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default ToDoList;
