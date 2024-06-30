import React from "react";
import Avatar1 from "./../../../img/avatar1.jpg"
// import "./../profile.css"

function ProfileInfo() {
  return(
    <div className="me">
        <img src={Avatar1} className="Avatar1"/>
        <h2>Райaн Гослинг</h2>
    </div>
  )
}

export default ProfileInfo