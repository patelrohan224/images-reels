import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home.jsx";
import Footer from "./view/Footer.jsx";
import Looks from "./view/Looks.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/looks/:id" element={<Looks />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
