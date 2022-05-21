import "./App.css";
import Home from "./Component/Home";
import Post from "./Component/Post";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
