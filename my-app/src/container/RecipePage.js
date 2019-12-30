import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux';

class RecipePage extends Component {

  state = {
    recipes: []
  }

  async getRecipes() {
    const response = await fetch('http://localhost:3000/recipes')
    const data = await response.json()
    this.props.addRecipes(data)
    console.log(data)
  }

  componentDidMount(){
    this.getRecipes()
  }


  render() {
    const { recipes } = this.props

    return (
      <div>
        {recipes.map(recipe => <ul>
          <li>{recipe.name}</li>
        </ul>)}      
      </div>
    )}
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch({ type: 'LOAD_RECIPE', recipes }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
