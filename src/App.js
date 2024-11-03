import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Profile from './components/profile/profile.jsx'
import Navbar from './components/navbar/navbar.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import Favorite from './components/favorite/favorite.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function App(props) {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={()=><Profile PostsData={props.state.PostsData} NewPostText={props.state.NewPostText} dispatch={props.dispatch}/>}/>
        <Route exact path="/profile" render={()=><Profile PostsData={props.state.PostsData} NewPostText={props.state.NewPostText} dispatch={props.dispatch}/>}/>
        <Route exact path="/dialogs" render={()=><Dialogs NewMessageText={props.state.NewMessageText} MessageItems={props.state.MessageItems} dispatch={props.dispatch} DialogNames={props.state.DialogNames}/>}/>
        <Route exact path="/favorite" render={()=><Favorite FavoriteList={props.state.FavoriteList}/>}/>
      </Switch>
    </div>
  );
}

export default App;
