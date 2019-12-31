import React, { Component } from 'react';
import './App.css';
// import addRecipe from '../src/container/addRecipe'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RecipePage from './components/RecipePage'
import Home from './components/Home'
import RecipeForm from './components/RecipeForm'
import { withRouter } from 'react-router-dom'

class App extends Component {

render() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path='/recipes' component={RecipePage} />
        <Route path='/recipes/new' component={(RecipeForm)} />
      </div>
    </Router>
  );
}

}


  export default App;