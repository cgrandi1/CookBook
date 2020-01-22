import React, { Component } from 'react'
// import RecipeEdit from './RecipeEdit'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'
import { deleteRecipe } from '../actions/RecipeActions'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class RecipePage extends Component {

  render() {

    const { match, recipe } = this.props;
    console.log(recipe)

    // let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

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
            <Button variant="danger" onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</Button>
            <Button variant="warning"> <Link to={`/recipe/${recipe.id}`}> Edit Recipe </Link></Button>
          </ButtonToolbar>
        </Card>
        <div className="col-md-6">
          <Switch>
            <Route path={`${match.url}/:recipeId/edit`} component={RecipeEdit} />
          </Switch>

        </div>

      </div>
    )
  }

}
export default connect(null, { deleteRecipe })(RecipePage)