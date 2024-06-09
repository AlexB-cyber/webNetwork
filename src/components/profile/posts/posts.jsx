import React from "react";
import Avatar1 from "../../../img/avatar1.jpg"
import Post from "./post/post.jsx"
import "./posts.css"

function Posts() {
  return(
    <div className="posts">
        <h2>Комментарии</h2>
        <div className="comm-ent">
          <input type="text" placeholder="Ваш комментарий"/>
          <button>Оставить</button>
        </div>
        <Post message="Круто!"/>
        <Post message="Класс!"/>
        <Post message="Вау!"/>
        <Post message="👋!"/>
      </div>
  )
}

export default Posts;