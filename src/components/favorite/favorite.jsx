import React from "react";
import "./favorite.css"
import Favorites from "./favorites/favorites";

function Favorite(props) {
  return (
    <div className="favorite">
      <h2 className="favorite-h2">Favorite messages</h2>
      <div className="fav-mess">
        {props.FavoriteList.map((e)=>
          <Favorites username={e.username} usertext={e.usertext} userid={e.userid}/>
        )}
      </div>
    </div>
  );
}

export default Favorite