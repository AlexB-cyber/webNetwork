import React from "react";
import "./dialogs.css"

function Dialogs() {
  return(
    <div className="dialogs">
      <div className="message">
        <p>Alex</p>
        <p>Вау</p>
      </div>
      <div className="message">
        <p>John</p>
        <p>Круто</p>
      </div>
      <div className="message">
        <p>Elon</p>
        <p>Класс</p>
      </div>
      <div className="send">
        <input type="text" placeholder="Написать сообщение"/>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs