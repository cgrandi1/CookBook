import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux';

class RecipePage extends Component {

  state = {
    recipes: {
      name: "",
      instructions: [],
      currentIndex: 0,
      showAdd: false

    },
    
  }

  open = (state, currentIndex) => {
    this.setState({ [state]: true });
    this.setState({ currentIndex })

  }

  // close = () => {
  //   if (this.state.showAdd) {
  //     this.setState({ showAdd: false })
  //   }
  //   else if (this.state.showEdit) {
  //     this.setState({ showEdit: false })
  //   }
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
    const { recipes } = this.props
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
                    <Button variant="danger" onClick={(event) => this.deleteRecipe(index)}>Delete Recipe</Button>
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
  addRecipes: recipes => dispatch({ type: 'LOAD_RECIPE', recipes }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
