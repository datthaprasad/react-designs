import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
