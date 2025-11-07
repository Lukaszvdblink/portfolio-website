import './App.css'
import Navbar from './pages/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navbar />}>
         
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
