import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-5 pb-3 font-extrabold bg-black">
      <div className="flex">
        <div className="w-[20%]">
          {/* Optional Logo or Brand Name */}
        </div>
        <div className="w-[80%]">
          <ul className="flex justify-between text-white px-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

