import React, { Component } from 'react'
import {useState} from  'react'
import RecipeAction from '../actions/RecipeActions'
import Recipe from '../components/Recipe'

class RecipeContainer extends Component{


    // updateSearch = event => {
    //     setSearch(event.target.value);
    // }

    // getSearch = event => {
    //     event.preventDefault();
    //     setQuery(search)

    // }

    

    // render() {
    //     return (
    //         <div className="Recipe">
    //           <form onSubmit={this.getSearch} className="search-form">
    //             <input 
    //             className="search-bar" 
    //             onChange={this.updateSearch} 
    //             value={this.state.recipes}
    //             type="text" />
    //             <button className="search-button" type="submit">
    //               Search  
    //             </button>
    //           </form>
    //           {recipes.map(recipe =>(
    //               <Recipe 
    //               name={recipe.recipe.name} 
    //               instructions={recipe.recipe.instructions}/>
    //           ))}
    //           {/* <div>
    //               <AddRecipe
    //                 recipeData={this.state} 
    //                 handleRecipeName={this.handleRecipeName}
                  
    //               />
    //           </div> */}
      
    //         </div>
    //       );
    //     }
      

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