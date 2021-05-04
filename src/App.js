import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roots from './Roots';
import Growth from './Growth';
import Mycelium from './Mycelium';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/roots'>
            <Roots />
          </Route>
          <Route path='/growth'>
            <Growth />
          </Route>
          <Route path='/mycelium'>
            <Mycelium />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
