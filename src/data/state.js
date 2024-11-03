import Avatar1 from "./../img/avatar1.jpg"
import Avatar2 from "./../img/avatar2.jpg" 

const ADDPOST = "ADDPOST"
const ADDMESSAGE = "ADDMESSAGE"
const ONMESSAGECHANGE = "ONMESSAGECHANGE"
const POSTCHANGE = "POSTCHANGE" 

let store = {
  state : {
    PostsData: [
      { name: "Илон Маск", message: "Круто!", id: 1, likes: 20, avatar: Avatar2 },
      { name: "Райан Гослинг", message: "Класс!", id: 2, likes: 10, avatar: Avatar1 },
      { name: "John Carter", message: "Вау!", id: 3, likes: 17, avatar: Avatar1 },
      { name: "John Carter", message: "👋", id: 4, likes: 99, avatar: Avatar2 }
    ],
    NewPostText: "Hello",
    NewMessageText: "Great!",
    DialogNames: [
      { name: "Alex", id: 1 },
      { name: "Elon", id: 2 },
      { name: "John", id: 3 }
    ],
    MessageItems: [
      { message: "Привет!", id: 1 },
      { message: "👋", id: 2 },
      { message: "Круто!", id: 3 }
    ],
    FavoriteList: [
      { username: 'Jennifer', usertext: "Cool!", userid: 4 },
      { username: 'Helen', usertext: "OMG!", userid: 5 },
      { username: 'Margo', usertext: "🔥🔥", userid: 6 }
    ]
  },
  
  ReRenderTree () {
    console.log("Hey")
  },
  subscribe  (observer) {
    this.ReRenderTree = observer
  },
  getState() {
    return this.state
  },

  dispatch(action) {
   if (action.type === ADDPOST) {
    let newPost = {
      name: "Leo",
      message: this.state.NewPostText,
      id: 5,
      likes: 20,
      avatar: Avatar2
    }
    this.state.PostsData.unshift(newPost);
    console.log(this.state.PostsData)
    this.ReRenderTree(this.state)
   }
   else if (action.type === POSTCHANGE) {
    this.state.NewPostText = action.text;
    this.ReRenderTree(this.state)
   }
   else if (action.type === ADDMESSAGE) {
    let newMessage = {
      message: this.state.NewMessageText,
      id: 4
    }
    let newDialog = {
      name: "Jennifer",
      id: 4
    }
    this.state.DialogNames.unshift(newDialog)
    this.state.MessageItems.unshift(newMessage);
    console.log(this.state.MessageItems)
    this.ReRenderTree(this.state)
   }
   else if (action.type === ONMESSAGECHANGE) {
    this.state.NewMessageText = action.mess;
    this.ReRenderTree(this.state)
   }
  }
}

export let AddPostAC = () => {
  return {type: "ADDPOST", id: 1}
}  
export let AddMessageAC = () => {
  return {type: "ADDMESSAGE", id: 2}
}
export let OnMessageChangeAC = (mess) => {
  return {type: "ONMESSAGECHANGE", id: 3, mess: mess}
}
export let OnPostChangeAC = (text) => {
  return {type: "POSTCHANGE", id: 4, text: text}
}
 
export default store