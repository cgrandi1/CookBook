import React, { Component } from 'react'
import Recipe from '../Recipe'

class RecipeContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            recipes: {
                name: " ",
                instructions: []
            }
        }
    }

    getRecipes = async () => {
        const response = await fetch('http://localhost:3000/recipes');
        const data = response
        console.log(data)

    }

    


    // componentDidMount(){
    //     this.getRecipes
    // }

    handleRecipeName = event => {
        this.setState({
            recipes: event.target.value
        })

    }

    render() {
        return (
            <div className="Recipe">
              <form className="search-form">
                <input className="search-bar" onChange={this.handleRecipeName(event)} value={this.state.recipes}type="text" />
                <button className="search-button" type="submit">
                  Search  
                </button>
              </form>
              <div>
                  <Recipe
                    recipeData={this.state} 
                    handleRecipeName={this.handleRecipeName}
                  
                  />
              </div>
      
            </div>
          );
        }
      }

export default RecipeContainer;