import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/features'>ghhgh</Route>
          <Route path='/pricing'>fghhf</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
