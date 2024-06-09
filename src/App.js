import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Profile from './components/profile/profile.jsx'
import Navbar from './components/navbar/navbar.jsx';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Profile/>
      <Navbar/>
    </div>
  );
}

export default App;
