import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'




export class RecipeInput extends Component {

  // state = {
  //   recipes: {
  //     name: " ",
  //     instructions: []
  //   },
  //   currentIndex: 0,
  //   isOpen: false
  // }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   })
  // };

  // // open = (state, currentIndex) => {
  // //   this.setState({ [state]: true });
  // //   this.setState({ currentIndex })

  // // }

  // // close = () => {
  // //   if (this.state.showAdd) {
  // //     this.setState({ showAdd: false })
  // //   }
  // //   else if (this.state.showEdit) {
  // //     this.setState({ showEdit: false })
  // //   }
  // // }


  // // saveNewRecipe() {
  // //   let recipes = this.state.recipes.slice();
  // //   recipes.push({ recipeName: this.state.newestRecipe.recipeName, ingredients: this.state.newestRecipe.ingredients })
  // //   localStorage.setItem('recipes', JSON.stringify(recipes))
  // //   this.setState({{ name: " ", ingredients: [] } });
  // //   this.close();
  // // }

  // handleOnChangeName = event => {
  //   this.setState({
  //     name: event.target.value,
  //   })
  // }

  // handleOnChangeInstructions = event => {
  //   this.setState({
  //     instructions: event.target.value.split(" , "),
  //   })
  // }


  // handleOnSubmit = event => {
  //   event.preventDefault()
  //   this.props.addRecipe(this.state.recipe)
  //   this.setState({
  //     name: '',
  //     instructions: []
  //   })
  // }

  // //   componentDidMount(){
  // //   let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  // //   this.setState({recipes})
  // //   }

  render() {
    const { currentIndex } = this.state
    return (
      <div className="addRecipe">
        <form onSubmit={ event => this.handleOnSubmit(event) }>
        <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <h1>Recipe Name</h1>
                <FormControl
                  type="text"
                  placeholder="Enter Recipe Name"
                  onChange={(event) => this.handleOnChangeName(event)} 
                  value={this.state.name}>
                </FormControl>
                <FormGroup controlId="formControlTextArea">
                  <h1>Ingredients</h1>
                  <FormControl
                    type="textarea"
                    placeholder="Enter Instructions (Seperate by commas)"
                    onChange={(event) => this.handleOnChangeInstructions(event)}
                    value={this.state.instructions}>
                  </FormControl>
                </FormGroup>
              </FormGroup>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button onClick={(event) => this.saveNewRecipe(newestRecipe)}>Save Recipe</Button>
            </Modal.Footer> */}
          </Modal.header>
        </Modal>
        <Button bsStyle="primary" onClick={this.addRecipe()}>Add Recipe</Button>
        </form>
      </div>
    )
  }
}
    

export default RecipeInput;




