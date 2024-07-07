import React from "react";
import Post from "./post/post.jsx"
import "./posts.css"

function Posts(props) {
  return (
    <div className="posts">
      <h2>Комментарии</h2>
      <div className="comm-ent">
        <input type="text" placeholder="Ваш комментарий" />
        <button className="button">Оставить</button>
      </div>
      {props.PostsData.map((e) =>
        <Post name={e.name} message={e.message} id={e.id} likes={e.likes} avatar={e.avatar} />
      )}
    </div>
  )
}

export default Posts;