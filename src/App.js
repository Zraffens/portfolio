import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import "./App.css";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes here as you develop your portfolio */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
