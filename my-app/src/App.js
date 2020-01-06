import React, { Component } from 'react';
import './App.css';
// import addRecipe from '../src/container/addRecipe'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import RecipeShow from './components/RecipeShow'
import Home from './components/Home'
import RecipePage from './container/RecipePage'
import EditRecipePage from './components/EditRecipePage'

class App extends Component {

render() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path='/recipes' component={RecipeShow} />
        <Route path='/recipes/new' component={(RecipePage)} />
        <Link to="/recipe/:_id" component={(EditRecipePage)} />
      </div>
    </Router>
  );
}

}


  export default App;

//   state = {
//     _id: this.props.recipe ? this.props.recipe._id : null,
//     name: this.props.recipe ? this.props.recipe.name : " ",
//     instructions: this.props.recipe ? this.props.recipe.instructions : " "
// }

// componentWillReceiveProps = (nextProps) => {
//   this.setState({
//       _id: nextProps.recipe._id,
//       name: nextProps.recipe.name,
//       instructions: nextProps.instruction


//   })
// }

// componentDidMount = () => {
//   if (this.params._id) {
//       this.props.fetchRecipe(this.props.params._id);
//   }
// }

// function mapStateToProps(state, props) {
//   if (props.match.params._id) {
//       return {
//           recipe: state.recipe.find(item => item._id === props.match.params._id)
//       }
//   } 
//   return { recipe: null }
// }