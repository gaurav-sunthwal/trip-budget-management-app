import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard/DashBoard";
import "./Style/index.css"
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
