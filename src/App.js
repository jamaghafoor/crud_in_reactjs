import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './componnents/pages/Home';
import About from './componnents/pages/About';
import Contact from './componnents/pages/Contact';
import Navbar from './componnents/Layout/Navbar';
import Pagenotfound from './componnents/pages/PageNotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './componnents/user/Add';
import View from './componnents/user/view';
import Update from './componnents/user/Update';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/user/add" component={Add}/>
        <Route  path="/user/view/:id" component={View}/>
        <Route  path="/user/update/:id" component={Update}/>
        <Route exact path="*" component={Pagenotfound}/>
        
      </Switch>

      </Router>
    </div>
  );
}

export default App;
