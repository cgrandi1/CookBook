import React from 'react'
import { connect } from 'react-redux'
import { editRecipe, fetchRecipe } from '../actions/RecipeActions'

class RecipeEdit extends React.Component {
    constructor(props) {
        console.log(props)

        super(props);
        this.state = {
            id: window.location.href.split("recipe/")[1],
            name: props.recipe.name,
            instructions: props.recipe.instructions,
            ingredients: props.recipe.ingredients,
            time: props.recipe.time
        }
    }

    componentDidMount() {
        this.props.fetchRecipe(this.state.id)
    }

    // async getEvent() {
    //     const response = await fetch(`http://localhost:3000/recipes/${this.state.id}`)
    //     const data = await response.json()
    //     this.setState({
    //         name: data.name,
    //         instructions: data.instructions
    //     })
    // }



    handleOnChange = (event) => {
        console.log(event)
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({
            [name]: value
    })
}
    

handleSubmit = (event) => {
    console.log(event)
  event.preventDefault()
   this.props.editRecipe(this.state)
   this.setState({
       name: this.props.name,
       instructions: this.props.instructions,
       ingredients: this.props.ingredients,
       time: this.props.time

   })
}



render() {
        return (
            <div className="editRecipe">
                <form onSubmit={this.handleSubmit}>
                <label>Edit Recipe:  </label>
                <div>
                    <input
                        type='text'
                        placeholder='Edit Name'
                        value={this.state.name} 
                        name='name'
                        onChange={event => this.handleOnChange(event)} />
                    </div>
                    <br />
                    <div>
                        <textarea
                            type='text'
                            placeholder='Edit Instructions'
                            value={this.state.instructions}
                            name='instructions'
                            onChange={event => this.handleOnChange(event)} />
                    </div>
                    <br />
                    <div>
                    <input
                        type='text'
                        placeholder='Edit Ingredients'
                        value={this.state.ingredients} 
                        name='ingredients'
                        onChange={event => this.handleOnChange(event)} />
                    </div>
                    <br />
                    <div>
                    <input
                        type='text'
                        placeholder='Edit Time'
                        value={this.state.time} 
                        name='time'
                        onChange={event => this.handleOnChange(event)} />
                    </div>

                        <button type='submit'> Submit </button>
                </form>
            </div>

                )
                }
            }

// const mapStateToProps = state => {
// return {
//         recipe: state.recipes[0]
//     }
// }

export default connect(null, { editRecipe, fetchRecipe })(RecipeEdit)