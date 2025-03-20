
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"

export default function App(){
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/project" element={<Project/>}/>
</Routes>
</BrowserRouter>

     

  )
}