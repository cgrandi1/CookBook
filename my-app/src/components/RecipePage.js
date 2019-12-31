import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/RecipeActions';
import { deleteRecipe } from '../actions/RecipeActions'
// import RecipeInput from '../components/RecipeInput'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'


class RecipePage extends Component {


  // state = {
  //   recipes: {
  //     name: "",
  //     instructions: [],
  //     currentIndex: 0,


  //   },

  // }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   })
  // };

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
              <Button variant="success">Add Recipe</Button>  
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
