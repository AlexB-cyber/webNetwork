import React from "react";
import ".//profile.css"
import Posts from "./posts/posts.jsx"
import ProfileInfo from "./profileInfo/profileInfo.jsx";

function Profile(props) {
  return(
    <div>
      <ProfileInfo/>
      <Posts PostsData={props.PostsData} NewPostText={props.NewPostText} dispatch={props.dispatch}/>
    </div>
  )
} 

export default Profile;