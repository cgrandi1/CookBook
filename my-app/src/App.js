import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
// import addRecipe from '../src/container/addRecipe'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RecipeShow from './components/RecipeShow'
import Home from './components/Home'
import RecipePage from './container/RecipePage'
import RecipeEdit from './components/RecipeEdit'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path='/recipes' component={RecipeShow} />
            <Route path='/recipes/new' component={(RecipePage)} />
            <Route exact path='/recipe/:id' render={(routerProps) => <RecipeEdit {...routerProps} entries={this.props.recipes} />} />
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps)(App)

