import React from "react";
import "./favorites.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Favorites(props) {
  return (
    <div className="favorites">
      <div className="likes">
        <input type="checkbox" className="like" id="like" ></input>
        <label className="like1" for="like">❤️</label>
        <label className="like2" for="like">🤍</label>
      </div>
      <div className="fav-text">
        <NavLink to={`/favorites/${props.userid}`} className="fav-name">{props.username}</NavLink>
        <NavLink to={`/favorites/${props.userid}`} className="fav-comm">{props.usertext}</NavLink>
      </div>
    </div>
  )
}

export default Favorites