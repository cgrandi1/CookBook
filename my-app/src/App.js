import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Panel from 'react-bootstrap/Panel'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Modal from 'react-bootstrap/Modal'
import FormGroup from 'react-bootstrap/FormGroup'
// import ControlLabel from 'react-bootstrap/ControlLabel'
import FormControl from 'react-bootstrap/FormControl'
import RecipeContainer from './container/RecipeContainer'
import Recipe from './components/Recipe'

class App extends Component {

  state = {
    recipes: [],
    showAdd: false,
    showEdit: false,
    currentIndex: 0,
    newestRecipe: { recipeName: "", ingredients: [] }
  }

  //deleteRecipe
  deleteRecipe(index) {
    let recipes = this.state.recipes.splice();
    recipes.splice(index, 1);
    this.setState({ recipes });

  }

  //updateNewRecipe.recipeName
  updateNewRecipe(recipeName, ingredients) {
    this.setState({ newestRecipe: { recipeName: recipeName, ingredients: ingredients } })
  }

  //Save a new recipe to recipe
  saveNewRecipe(newestRecipe) {
    let recipes = this.state.recipes.slice();
    recipes.push({ recipeName: this.state.newestRecipe.recipeName, ingredients: this.state.newestRecipe.ingredients })

    this.setState({ recipes })
    this.setState({ newestRecipe: { recipeName: " ", ingredients: [] } });
    this.close();
  }
  //closes Modal
  close = () => {
    if (this.state.showAdd) {
      this.setState({ showAdd: false })
    }
    else if (this.state.showEdit) {
      this.setState({ showEdit: false })
    }
  }
  //open modal
  open = (state, currentIndex) => {
    this.setState({ [state]: true });
    this.setState({ currentIndex })

  }

  updateRecipeName(recipeName, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName: recipeName, ingredients: recipes[currentIndex].ingredients};
    this.setState({recipes});
  }

  updateIngredients(ingredients, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName: recipes[currentIndex], ingredients: ingredients};
    this.setState({recipes})
  }

  render() {
    const { recipes, newestRecipe, currentIndex } = this.state

    return (
      <div className="App">
        {recipes.length > 0 && (
          <div>
          <Accordion>
            {recipes.map((recipe, index) => (
              <Panel header={recipe.name} eventKey={index} key={index}>
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
              </Panel>


            ))}
          </Accordion>
          <Modal show={this.state.showEdit} onHide={this.close}>
            <Modal.header closeButton>
              <Modal.Title>Edit Recipe</Modal.Title>
              <Modal.Body>
                <FormGroup controlId="formBasicText">
                  <h1>Recipe Name</h1>
                  <FormControl
                    type="text"
                    value={recipes[currentIndex].recipeName}
                    placeholder="Enter Recipe Name"
                    onChange={(event) => this.updateNewRecipe(event.target.value, currentIndex)}>
                  </FormControl>
                  <FormGroup controlId="formControlTextArea">
                    <h1>Ingredients</h1>
                    <FormControl
                      type="textarea"
                      value={newestRecipe.ingredients}
                      placeholder="Enter ingredients (Seperate by commas)"
                      onChange={(event) => this.updateNewRecipe(newestRecipe.recipeName, event.target.value.split(","), currentIndex)}>
                    </FormControl>
                  </FormGroup>
                </FormGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal.header>
          </Modal>
        </div>
  }

        <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <h1>Recipe Name</h1>
                <FormControl
                  type="text"
                  value={newestRecipe.recipeName}
                  placeholder="Enter Recipe Name"
                  onChange={(event) => this.updateNewRecipe(event.target.value, newestRecipe.ingredients)}>
                </FormControl>
                <FormGroup controlId="formControlTextArea">
                  <h1>Ingredients</h1>
                  <FormControl
                    type="textarea"
                    value={newestRecipe.ingredients}
                    placeholder="Enter ingredients (Seperate by commas)"
                    onChange={(event) => this.updateNewRecipe(newestRecipe.recipeName, event.target.value.split(","))}>
                  </FormControl>
                </FormGroup>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event) => this.saveNewRecipe(newestRecipe)}>Save Recipe</Button>
            </Modal.Footer>
          </Modal.header>
        </Modal>
        <Button bsStyle="primary" onClick={(event) => this.open("showAdd", currentIndex)}>Add Recipe</Button>
      </div>

    );
  }
}

export default App;
