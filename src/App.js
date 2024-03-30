import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ColorPicker from "./ColorPicker/ColorPicker";
import CountComponent from "./CounterUpdateFunctions/Counter";

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="colorpicker" element={<ColorPicker/>} />
        <Route path="counter" element={<CountComponent/>} />
      </Routes>
    </div>
  </Router>
);

export default App;