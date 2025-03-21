
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Resume from "./pages/Resume"
import AppBarMui from "./components/AppBarMui"
import Contact from "./pages/Contact"
import './index.css'

export default function App(){
  return (
    <div className="body">
      <BrowserRouter>
      <AppBarMui/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}