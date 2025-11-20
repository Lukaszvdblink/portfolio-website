// src/App.jsx

import './App.css'
import Navbar from './pages/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import Project from './pages/projects';
import ProjectDetail from './pages/ProjectDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
