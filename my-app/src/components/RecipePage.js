import React, { Component } from 'react'
// import RecipeEdit from './RecipeEdit'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import { deleteRecipe } from '../actions/RecipeActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RecipePage extends Component {



  render() {

    const { recipe } = this.props;
    if (recipe != null) {
      console.log(recipe)
    return (
      <div className="show">
        <Card key={recipe.id}>
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>
              <ul>
                <li >Instructions: {recipe.instructions}</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <ul>
                <li >Ingredients: {recipe.ingredients}</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <ul>
                <li >Cook Time: {recipe.time}</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <ButtonToolbar>
            <Button variant="danger" onClick={() => this.props.deleteRecipe(recipe.id)}>Delete Recipe</Button>
            <Link path to={`/recipes/${recipe.id}`} >Show Recipe </Link>

          </ButtonToolbar>
        </Card>


      </div>
    )
  }
}

}

// const mapStateToProps = state => {
//   return {
//     recipes: state.recipes
//   }
// }


export default connect(null, {deleteRecipe })(RecipePage)