import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux';
// import { fetchRecipe } from '../actions/RecipeActions';
import { deleteRecipe, getRecipes } from '../actions/RecipeActions'



class RecipePage extends Component {


 


  componentDidMount() {
    this.props.getRecipes()
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
                    <Button variant="danger" onClick={() => this.props.deleteRecipe(recipe)}>Delete Recipe</Button>
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





export default connect(mapStateToProps, {getRecipes, deleteRecipe})(RecipePage);
