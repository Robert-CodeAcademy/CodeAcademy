import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Clock from "./features/Clock/Clock";
import MineSweeper from "./features/MineSweeper/MineSweeper";
import XO from "./features/XO/XO";
import RockPaperScissors from "./features/RockPaperScissors/RockPaperScissors";
import Calculator from "./features/Calculator/Calculator";
import ToDoList from "./features/ToDoList/ToDoList";

function App() {
  const [activeTab, setActiveTab] = useState([
    { id: 1, label: "Clock", isActive: true, component: <Clock /> }, // iminja na app shto kje gi pravime
    {
      id: 2,
      label: "Mine Sweeper",
      isActive: false,
      component: <MineSweeper />,
    },
    { id: 3, label: "XO", isActive: false, component: <XO /> },
    {
      id: 4,
      label: "Rock Paper Scissors",
      isActive: false,
      component: <RockPaperScissors />,
    },
    {
      id: 5,
      label: "Calculator",
      isActive: false,
      component: <Calculator />,
    },
    { id: 6, label: "ToDoList", isActive: false, component: <ToDoList /> },
  ]);

  const handleActiveTab = (id) => {
    let copy = [...activeTab];
    copy[activeTab.findIndex((item) => item.isActive)].isActive = false;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    setActiveTab(copy);
  };

  return (
    <div>
      <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
      <div>{activeTab.find((item) => item.isActive).component}</div>
      <Footer />
    </div>
  );
}

export default App;
