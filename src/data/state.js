import Avatar1 from "./../img/avatar1.jpg"
import Avatar2 from "./../img/avatar2.jpg"

let state = {
  PostsData : [
    { name: "Илон Маск", message: "Круто!", id: 1, likes: 20, avatar: Avatar2 },
    { name: "Райан Гослинг", message: "Класс!", id: 2, likes: 10, avatar: Avatar1 },
    { name: "John Carter", message: "Вау!", id: 3, likes: 17, avatar: Avatar1 },
    { name: "John Carter", message: "👋", id: 4, likes: 99, avatar: Avatar2 }
  ],
  DialogNames : [
    {name: "Alex", id: 1},
    {name: "Elon", id: 2},
    {name: "John", id: 3}
  ],
  MessageItems : [
    {message: "Привет!", id: 1},
    {message: "👋", id: 2},
    {message: "Круто!", id: 3}
  ],
  FavoriteList : [
    {username: 'Jennifer', usertext: "Cool!", userid: 4},
    {username: 'Helen', usertext: "OMG!", userid: 5},
    {username: 'Margo', usertext: "🔥🔥", userid: 6}
  ]
}

export default state