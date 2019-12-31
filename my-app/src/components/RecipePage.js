import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux';
// import { fetchRecipe } from '../actions/RecipeActions';
import { deleteRecipe } from '../actions/RecipeActions'



class RecipePage extends Component {


  async getRecipes() {
    const response = await fetch('http://localhost:3000/recipes')
    const data = await response.json()
    this.props.addRecipes(data)
    console.log(data)
  }


  componentDidMount() {
    this.getRecipes()
  }


  render() {
    const { recipes }= this.props
    if (recipes != null) {
      return (
        <div className="showRecipe">
          <Accordion>
            {recipes.map((recipe, index) =>
              <Card eventkey={index} key={index}>
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    <ul>
                      <li >{recipe.instructions}</li>
                    </ul>
                  </Card.Text>
                  <ButtonToolbar>
                    <Button variant="danger" onClick={() => deleteRecipe(recipe)}>Delete Recipe</Button>
                    <Button variant="info" onClick={(this.open)}>Edit Recipe</Button>
                  </ButtonToolbar>
                </Card.Body>
              </Card>
               )}; 
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


const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch({ type: 'LOAD_RECIPES', recipes }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
