import React from "react";
import "./dialogs.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Dialog from "./dialog/dialog";
import Messages from "../messages/messages";
import { AddMessageAC } from "../../data/state";
import { OnMessageChangeAC } from "../../data/state";

let messageText = React.createRef();

function Dialogs(props) {
  let AddMessage = () => {
    // props.AddMessage(messageText.current.value)
    props.dispatch(AddMessageAC())
  }
  let onMessageChange = () => {
    // props.onMessageChange(messageText.current.value)
    props.dispatch(OnMessageChangeAC(messageText.current.value))
  }
  console.log(props)
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
        <input onChange={onMessageChange} ref={messageText} type="text" value={props.NewMessageText} placeholder="Написать сообщение"/>
        <button onClick={AddMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs