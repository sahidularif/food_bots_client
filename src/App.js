
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Navs from './Components/Home/Navs/Navs';

function App() {
  return (
    <Router>
      <Navs/>
      <Switch>
        <Route path="/order">
          <Orders />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>);
}

export default App;
