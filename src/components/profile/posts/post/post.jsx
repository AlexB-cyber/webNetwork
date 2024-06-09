import React from "react";
import Avatar1 from "../../../../img/avatar1.jpg"
import "./post.css"

function Post(props) {
  return(
      <div className="post">
        <div className="av-name">
          <img src={Avatar1}/>
          <p>Райан Гослинг</p>
        </div>
        <p className="comm-text">{props.message}</p>
      </div>
  )
}

export default Post;