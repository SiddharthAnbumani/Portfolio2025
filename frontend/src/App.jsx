
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Resume from "./pages/Resume"
import AppBarMui from "./components/AppBarMui"

export default function App(){
  return (
    <div className="background-section">
      <BrowserRouter>
      <AppBarMui/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}