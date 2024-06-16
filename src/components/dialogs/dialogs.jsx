import React from "react";
import "./dialogs.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Dialog from "./dialog/dialog";
import Messages from "../messages/messages";

function Dialogs(props) {
  return (
    <div className="dialogs">
      <div className="dialogs-container">
        <Dialog name={'Alex'} id={'1'}/>
        <Dialog name={'Elon'} id={'2'}/>
        <Dialog name={'John'} id={'3'}/>
      </div>
      <div className="messages-container">
        <Messages message="Привет!"/>
        <Messages message="👋"/>
        <Messages message="Круто!"/>
      </div>
      <div className="send">
        <input type="text" placeholder="Написать сообщение"/>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs