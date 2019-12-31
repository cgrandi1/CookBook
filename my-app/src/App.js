import React, { Component } from 'react';
import './App.css';
// import addRecipe from '../src/container/addRecipe'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import RecipePage from './components/RecipePage'
import Home from './components/Home'

class App extends Component {

render() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/recipes' component={RecipePage} />
        {/* <Route path='/recipes/new' component={RecipeNew} /> */}
        </Switch>
      </div>
    </Router>
  );
}

}


  export default App;