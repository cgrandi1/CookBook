import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Panel from 'react-bootstrap/Panel'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Modal from 'react-bootstrap/Modal'
import FormGroup from 'react-bootstrap/FormGroup'
import ControlLabel from 'react-bootstrap/ControlLabel'
import FormControl from 'react-bootstrap/FormControl'
import {updateNewRecipe} from '../container/updateRecipe'



export class addRecipe extends Component {
  state = {
    recipes: [],
    showAdd: false,
    currentIndex: 0,
    newestRecipe: { name: "", ingredients: [] }
  }

  open = (state, currentIndex) => {
    this.setState({ [state]: true });
    this.setState({ currentIndex })

  }

  close = () => {
    if (this.state.showAdd) {
      this.setState({ showAdd: false })
    }
    else if (this.state.showEdit) {
      this.setState({ showEdit: false })
    }
  }

  saveNewRecipe() {
    let recipes = this.state.recipes.slice();
    recipes.push({ recipeName: this.state.newestRecipe.recipeName, ingredients: this.state.newestRecipe.ingredients })
    localStorage.setItem('recipes', JSON.stringify(recipes))
    this.setState({ recipes })
    this.setState({ newestRecipe: { name: " ", ingredients: [] } });
    this.close();
  }

  // handleRecipeName = event => {
  //   this.setState({
  //     recipes: event.target.value
  //   })

  // }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.addRecipe(this.state)
  // }



  render() {
    const { recipes, newestRecipe, currentIndex } = this.state
    return (
      <div className="addRecipe">
        {recipes.length > 0 && (
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
            ))};
              </Accordion>
              </div>
              
              <div>
              <Modal show={this.state.showAdd} onHide={this.close}>
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
              <Button bsStyle="primary" onClick={(event) => this.open(event, "showAdd", currentIndex)}>Add Recipe</Button>
      </div>

export default addRecipe;