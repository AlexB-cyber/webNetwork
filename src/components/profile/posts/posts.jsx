import React from "react";
import Post from "./post/post.jsx"
import "./posts.css"
import { AddPostAC, OnPostChangeAC } from "../../../data/state.js";

let postText = React.createRef();

function Posts(props) {
  let AddPost = () => {
    // props.AddPost(postText.current.value);
    props.dispatch(AddPostAC())
  }
  let onPostChange = () => {
    // props.onPostChange(postText.current.value)
    props.dispatch(OnPostChangeAC(postText.current.value))
  }
  console.log(props)
  return (
    <div className="posts">
      <h2>Комментарии</h2>
      <div className="comm-ent">
        <input ref={postText} type="text" onChange={onPostChange} value={props.newPostText} placeholder="Ваш комментарий" />
        <button onClick={AddPost} className="button">Оставить</button>
      </div>
      {props.PostsData.map((e) =>
        <Post name={e.name} message={e.message} id={e.id} likes={e.likes} avatar={e.avatar} />
      )}
    </div>
  )
}

export default Posts;