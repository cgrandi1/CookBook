import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
// import { fetchRecipe } from '../actions/RecipeActions';
import {  getRecipes } from '../actions/RecipeActions'
import RecipePage from './RecipePage'



class RecipeList extends Component {



  componentDidMount() {
    this.props.getRecipes()
  }

  

  render() {
    const { recipes }= this.props
    if (recipes != null) {
      console.log(recipes)
      return (
        <div className="showRecipe">
          <Accordion>
            { recipes.map((recipe =>
            <RecipePage key={recipe.id} recipe={recipe}/>

            ))}
            </Accordion>
        </div>
      )
    }
  }
};



const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

// const mapStateToDispatch = {
//   getRecipes: () => ({type: 'LOAD_RECIPES'})
// }




export default connect(mapStateToProps, {getRecipes})(RecipeList);
