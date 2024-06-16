import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Messages(props) {
  return(
    <div className="messages">
      <p>{props.message}</p>
    </div>
  )
}

export default Messages;