import React, { Component } from 'react';



export class AddRecipe extends Component{
    render(){
        return (
            <div className="inputName">
                <input 
                className="recipeName" 
                type="text"
                placeholder="Recipe"
                onChange={event => this.props.handleRecipeName(event)}
                value={this.props.recipeData.name} />
                <h1>Add Name of Recipe</h1>
                <div clasName="inputInstructions">
                    <input 
                    className="instructions" 
                    type="text"
                    placeholder="instructions" />
                    <p>Add Instructions</p>
                </div>
            </div>
        )
    }
}

export default AddRecipe;