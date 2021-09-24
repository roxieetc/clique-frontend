import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main';
import HomeFeed from './Components/HomeFeed';
import NavBar from './Components/NavBar';
import Profile from './Components/MyProfile';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Route exact path ='/' component={Main} />
      <Route exact path='/home' component={HomeFeed} />
      <Route exact path='/myprofile' component={Profile} />
      </Router>
    </div>
  );
}

export default App;
