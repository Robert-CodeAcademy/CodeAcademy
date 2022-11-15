import { Outlet } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <div className="footer-container">Robert Avramovski</div>
    </div>
  );
}

export default App;
