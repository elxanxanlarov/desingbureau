import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import SideBar from './layout/SideBar';
import { useState } from 'react';
import Projects from './pages/Projects';
import About from './pages/About';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
    <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
    <SideBar  isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}