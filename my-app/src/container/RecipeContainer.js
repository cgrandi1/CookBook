import React, { Component } from 'react'
import AddRecipe from '../../components/AddRecipe'

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



    handleRecipeName = event => {
        this.setState({
            recipes: event.target.value
        })

    }

    render() {
        return (
            <div className="Recipe">
              <form className="search-form">
                <input 
                className="search-bar" 
                onChange={this.handleRecipeName(event)} 
                value={this.state.recipes}
                type="text" />
                <button className="search-button" type="submit">
                  Search  
                </button>
              </form>
              <div>
                  <AddRecipe
                    recipeData={this.state} 
                    handleRecipeName={this.handleRecipeName}
                  
                  />
              </div>
      
            </div>
          );
        }
      

      componentDidMount(){
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(({instructions}) => this.setState({ recipes: instructions }))
        console.log(response)
        }
    }
    

export default RecipeContainer;