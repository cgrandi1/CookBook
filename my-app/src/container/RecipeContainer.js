import React, { Component } from 'react'
import {addRecipe} from '../components/AddRecipe'
import RecipeAction from '../actions/RecipeActions'

class RecipeContainer extends Component{
    constructor(){
        super()
        this.state = {
           
            recipes: []
            }
        }
    



    handleRecipeName = event => {
        this.setState({
            name: event.target.value
        })

    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addRecipe(this.state)
      }

    render() {
        return (
            <div className="Recipe">
              <form className="search-form">
                <input 
                className="search-bar" 
                // onChange={this.handleRecipeName(event)} 
                value={this.state.recipes}
                type="text" />
                <button className="search-button" type="submit">
                  Search  
                </button>
              </form>
              {/* <div>
                  <AddRecipe
                    recipeData={this.state} 
                    handleRecipeName={this.handleRecipeName}
                  
                  />
              </div> */}
      
            </div>
          );
        }
      

      componentDidMount() {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            this.setState({ recipes: data })
        })
        // console.log(response)
        }
}
    

export default RecipeContainer;