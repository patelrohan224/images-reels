import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home.jsx";
import Footer from "./view/Footer.jsx";
import Looks from "./view/Looks.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/looks" element={<Looks />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
