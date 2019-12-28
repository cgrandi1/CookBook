import React from 'react'
import RecipeListItem from '../components/RecipeListItem'
import { connect } from 'react-redux'


function RecipeListing(props){
    return <div className="recipe-listing">
        {
            props.recipes.map(recipes =>
                <RecipeListItem recipes={recipes} 
                recipe={recipe}
                addToDesert={props.addToDesert}
                />)
        }
    </div>
}

function mapStateToProps(state){
    return {
        desert: state.desert
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDesert: (item) =>{
            dispatch({ type: 'ADD_RECIPE', payload: item})
        },
        removeFromDesert: (item) => {
            dispatch({ type: 'REMOVE_RECIPE'})
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing)