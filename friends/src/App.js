import {Link,Route,Switch} from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js'
;
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Link to='/' className='home_button'><h1>Friends</h1></Link>
       <Link to='/login'><button className='login_button'>Login</button></Link>
      </header>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
