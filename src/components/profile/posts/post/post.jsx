import React from "react";
import Avatar1 from "../../../../img/avatar1.jpg"
import Avatar2 from "../../../../img/avatar2.jpg"
import "./post.css"

function Post(props) {
  return(
      <div className="post">
        <div className="av-name">
          <img src={props.avatar}/>
          <p> {props.name}</p>
        </div>
        <div className="av-like">
          <p className="comm-text">{props.message}</p>
          <span>{props.likes} 🤍</span>
        </div>
      </div>
  )
}

export default Post;