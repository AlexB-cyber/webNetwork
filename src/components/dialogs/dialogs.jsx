import React from "react";
import "./dialogs.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Dialog from "./dialog/dialog";
import Messages from "../messages/messages";

let DialogNames = [
  {name: "Alex", id: 1},
  {name: "Elon", id: 2},
  {name: "John", id: 3}
]
let MessageItems = [
  {message: "Привет!", id: 1},
  {message: "👋", id: 2},
  {message: "Круто!", id: 3}
]
function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialogs-container">
        {DialogNames.map((e) =>
          <Dialog name={e.name} id={e.id}/>
        )}
      </div>
      <div className="messages-container">
        {MessageItems.map((e)=>
          <Messages message={e.message} id={e.id}/>
        )}
      </div>
      <div className="send">
        <input type="text" placeholder="Написать сообщение"/>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs