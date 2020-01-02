import { addRecipe } from '../actions/RecipeActions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';

import React from 'react'


function RecipeForm(props) {
  return (
    <div className="RecipeForm">

      <Button variant="info" onClick={props.toggleModal}></Button>

      <form onSubmit={props.onSubmit} >
        <Modal onClose={props.toggleModal}>>
          <Modal.header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <h1>Recipe Name</h1>
                <FormControl
                  type="text"
                  placeholder="Enter Recipe Name"
                  onChange={props.onChange}
                  value={props.name}>
                </FormControl>
                <FormGroup controlId="formControlTextArea">
                  <h1>Ingredients</h1>
                  <FormControl
                    type="textarea"
                    placeholder="Enter Instructions (Seperate by commas)"
                    onChange={props.onChange}
                    value={props.instructions}>
                  </FormControl>
                </FormGroup>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={() => addRecipe()}>Add Recipe</Button>
            </Modal.Footer>
          </Modal.header>
        </Modal>
      </form>
    </div>
  )
}

const mapStateToProps = ({ recipe }) => ({ recipe })

// const mapDispatchToProps = dispatch => ({
//   addRecipe: recipe => dispatch({ type: 'ADD_RECIPE', recipe }),
// })




export default connect(mapStateToProps, {addRecipe})(RecipeForm);