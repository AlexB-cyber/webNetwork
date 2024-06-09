import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return(
    <div className="Navbar">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/dialogs">Dialogs</NavLink>
    </div>
  )
} 

export default Navbar;