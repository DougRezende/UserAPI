import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Barra de navegação */}
        <nav>
          <Link to="/">Login</Link> | 
          <Link to="/register">Register</Link>
        </nav>
        
        <Routes>
          {/* Definindo as rotas */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
