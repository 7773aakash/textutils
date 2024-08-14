import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Analyzer" about="About-Us" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
