import React from "react";
import ".//profile.css"
import Avatar1 from "../../img/avatar1.jpg"
import Posts from "./posts/posts.jsx"

function Profile() {
  return(
    <div className="Profile">
      <div className="me">
        <img src={Avatar1} className="Avatar1"/>
        <h2>Райaн Гослинг</h2>
        <Posts/>
      </div>
    </div>
  )
} 

export default Profile;