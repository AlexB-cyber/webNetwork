import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Dialog(props) {
  return(
    <div className="user">
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;