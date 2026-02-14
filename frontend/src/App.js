import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Predict from "./pages/Predict";
import Dataset from './pages/Dataset';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Predict />} />
        <Route path="/dataset" element={<Dataset />} />
      </Routes>
    </Router>
  )
}
