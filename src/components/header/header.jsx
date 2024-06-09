import React from "react";
import Logo from "../../img/telegram.png"
import "./header.css"

function Header() {
  return(
    <div className="Header">
      <img src={Logo} className="logo"/>
    </div>
  )
} 

export default Header;