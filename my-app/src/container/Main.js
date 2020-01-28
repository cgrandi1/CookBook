import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import RecipeEdit from '../components/RecipeEdit';
import RecipeShow from '../components/RecipeShow'
import Home from '../components/Home';
import RecipeContainer from './RecipeContainer';
// import RecipeEdit from '../components/RecipeEdit'
// import RecipeEdit from '../components/RecipeEdit'
import About from '../components/About'
import { getRecipes } from '../actions/RecipeActions'

class Main extends Component {

  componentDidMount() {
    if (this.props.recipes.length == 0 ){
      this.props.getRecipes()
    }
  }


  render() {
    return (
      <div>
        <Router>
            <NavBar />
            <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path="/" component={Home} />
            <Route exact path='/recipes' component={RecipeList} />
            <Route exact path='/recipes/new' component={(RecipeContainer)} />
            

            <Route exact path='/recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes} />} /> />
            <Route exact path='/recipes/:id/edit' render={(routerProps) => <RecipeEdit {...routerProps} recipes={this.props.recipes} />} /> />
            </Switch>
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




export default connect(mapStateToProps, { getRecipes})(Main)
