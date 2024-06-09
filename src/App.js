import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Profile from './components/profile/profile.jsx'
import Navbar from './components/navbar/navbar.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Profile}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/dialogs" component={Dialogs}/>
      </Switch>
    </div>
  );
}

export default App;
