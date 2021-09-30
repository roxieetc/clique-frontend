import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Components/Main';
import HomeFeed from './Components/HomeFeed';
import NavBar from './Components/NavBar';
import Profile from './Components/MyProfile';
import PostForm from './Components/NewPost';
import PostInfo from './Components/PostInfo';
import Register from './Components/Register';
import UpdatePost from './Components/UpdatePost';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
      <Route exact path ='/' component={Main} />
      <Route exact path='/home' component={HomeFeed} />
      <Route exact path='/myprofile' component={Profile} />
      <Route exact path='/newpost' component={PostForm} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/:id' component={PostInfo} />
      <Route exact path='/editpost/:id' component={UpdatePost} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
