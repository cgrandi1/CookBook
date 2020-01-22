import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RecipeList from '../components/RecipeList'
import Home from '../components/Home'
import RecipeContainer from './RecipeContainer'
// import RecipeEdit from '../components/RecipeEdit'
import About from '../components/About'

class Main extends Component {

  render() {
    return (
      <div>
        <Router>
            <NavBar />
            <Route exact path='/about' component={About}/>
            <Route exact path="/" component={Home} />
            <Route exact path='/recipes' component={RecipeList} />
            <Route exact path='/recipes/new' component={(RecipeContainer)} />
            {/* <Route exact path='/recipe/:id/edit' render={(routerProps) => <RecipeEdit {...routerProps} recipes={this.props.recipes} />} /> /> */}
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




export default connect(mapStateToProps)(Main)
