import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import FormGroup from 'react-bootstrap/FormGroup'
import ControlLabel from 'react-bootstrap/ControlLabel'
import FormControl from 'react-bootstrap/FormControl'

export class updateRecipe extends Component {
    state = {
        recipes: [],
        showEdit: false,
        currentIndex: 0,
        newestRecipe: { recipeName: "", ingredients: [] }
    }

    updateNewRecipe(recipeName, ingredients) {
        this.setState({ newestRecipe: { name: name, ingredients: ingredients } })
    }

    updateRecipeName(recipeName, currentIndex) {
        let recipes = this.state.recipes.slice();
        recipes[currentIndex] = { recipeName: recipeName, ingredients: recipes[currentIndex].ingredients };
        localStorage.setItem('recipes', JSON.stringify(recipes))
        this.setState({ recipes });
    }

    updateIngredients(ingredients, currentIndex) {
        let recipes = this.state.recipes.slice();
        recipes[currentIndex] = { recipeName: recipes[currentIndex], ingredients: ingredients };
        localStorage.setItem('recipes', JSON.stringify(recipes))
        this.setState({ recipes });

    }

    render() {
        const { recipes, newestRecipe, currentIndex } = this.state
        return (
            <div className="updateRecipe">
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
                


                )
        
        }
        
export default updateRecipe;