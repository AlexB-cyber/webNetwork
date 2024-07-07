import React from "react";
import "./dialogs.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Dialog from "./dialog/dialog";
import Messages from "../messages/messages";

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialogs-container">
        {props.DialogNames.map((e) =>
          <Dialog name={e.name} id={e.id}/>
        )}
      </div>
      <div className="messages-container">
        {props.MessageItems.map((e)=>
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