import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Recommendation from "./pages/Recommendation"
import Register from "./pages/Register"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recommendations" element={<Recommendation />} />


      </Routes>


    </>
  )
}
