import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux';
// import { fetchRecipe } from '../actions/RecipeActions';
import { deleteRecipe, getRecipes, editRecipe} from '../actions/RecipeActions'



class RecipePage extends Component {



  componentDidMount() {
    this.props.getRecipes()
  }
  


  render() {
    const { recipes, deleteRecipe, editRecipe }= this.props
    console.log(recipes)
    if (recipes != null) {
      return (
        <div className="showRecipe">
          <Accordion>
            { recipes.map((recipe, index) =>
              <Card eventkey={index} key={index}>
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    <ul>
                      <li >{recipe.instructions}</li>
                    </ul>
                  </Card.Text>
                  <ButtonToolbar>
                    <Button variant="danger" onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</Button>
                    <Button variant="info" onClick={() => editRecipe(recipe)} >Edit Recipe</Button>
                  </ButtonToolbar>
                </Card.Body>
              </Card>
               )}
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




export default connect(mapStateToProps, {getRecipes, deleteRecipe, editRecipe})(RecipePage);