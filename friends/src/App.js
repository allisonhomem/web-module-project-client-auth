import {Link,Route,Switch} from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import FriendsList from './components/FriendsList.js';
import AddFriend from './components/AddFriend.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Link to='/' className='home_button'><h1>Friend Cafe</h1></Link>
       <Link to='/login'><button className='cute_button'>Log-in</button></Link>
      </header>

      <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/login' component={Login}/>

        <ProtectedRoute path='/protected' component={FriendsList}/>

        <Route path='/friends/addnew' component={AddFriend}/>
      </Switch>
    </div>
  );
}

export default App;
