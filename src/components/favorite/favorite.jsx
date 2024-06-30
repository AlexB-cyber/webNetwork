import React from "react";
import "./favorite.css"
import Favorites from "./favorites/favorites";

function Favorite(props) {
  return (
    <div className="favorite">
      <h2 className="favorite-h2">Favorite messages</h2>
      <div className="fav-mess">
        <Favorites username={'Jennifer'} usertext="Cool" userid="4"/>
        <Favorites username={"Helen"} usertext="OMG!" userid="5"/>
        <Favorites username={"Margo"} usertext="🔥🔥" userid="6"/>
      </div>
    </div>
  );
}

export default Favorite