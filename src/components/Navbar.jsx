import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <ul className="flex justify-between bg-purple-800 font-bold text-white px-10">
            <li>
                 <NavLink to='/'>Home</NavLink> 
            </li>
            <li>
                Resume
            </li>
            <li>
            <NavLink to='/project'>Project</NavLink> 
            </li>
            <li>
                Contact Me 
            </li>
        </ul>
        </>
    )
}