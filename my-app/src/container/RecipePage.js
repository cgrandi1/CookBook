import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { getRecipes } from '../actions/RecipeActions'
import { connect } from 'react-redux';

class RecipePage extends Component {

  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { recipes } = this.state
    return (
      <div className="addRecipe">
        {recipes.length > 0 && (
          <Accordion>
            {recipes.map((recipe, index) => (
              <Card header={recipe.name} eventKey={index} key={index}>
                <ul>
                  {recipe.ingredients.map((item) =>
                    <li key={item}>
                      {item}
                    </li>
                  )}
                </ul>
                <ButtonToolbar>
                  <Button bsStyle="danger" onClick={(event) => this.deleteRecipe(index)}>Delete Recipe</Button>
                  <Button bsStyle="default" onClick={(this.open("showEdit", index))}>Edit Recipe</Button>
                </ButtonToolbar>
              </Card>
            ))};
                </Accordion>
        )}

        {/* <Modal show={this.state.showAdd} onHide={this.close}>
                  <Modal.header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                    <Modal.Body>
                      <FormGroup controlId="formBasicText">
                        <h1>Recipe Name</h1>
                        <FormControl
                          type="text"
                          value={newestRecipe.name}
                          placeholder="Enter Recipe Name"
                          onChange={(event) => this.props.updateNewRecipe(event.target.value, newestRecipe.name)}>
                        </FormControl>
                        <FormGroup controlId="formControlTextArea">
                          <h1>Ingredients</h1>
                          <FormControl
                            type="textarea"
                            value={newestRecipe.ingredients}
                            placeholder="Enter ingredients (Seperate by commas)"
                            onChange={(event) => this.props.updateNewRecipe(newestRecipe.ingredients, event.target.value.split(","))}>
                          </FormControl>
                        </FormGroup>
                      </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={(event) => this.saveNewRecipe(newestRecipe)}>Save Recipe</Button>
                    </Modal.Footer>
                  </Modal.header>
                </Modal>
                <Button bsStyle="primary" onClick={(event) => this.open(event, "showAdd", currentIndex)}>Add Recipe</Button> */}
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      recipes: state.recipes
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipes: () => {
      dispatch(getRecipes())
    },

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
