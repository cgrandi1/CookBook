import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editRecipe, fetchRecipe } from '../actions/RecipeActions'

class RecipeEdit extends Component {
    constructor(props) {
        console.log(props)

        super(props);
        this.state = {
            id: window.location.href.split("recipe/")[1],
            name: props.recipe.name,
            instructions: props.recipe.instructions,
            ingredients: props.recipe.ingredients,
            time: props.recipe.time,
            isClicked: false
        }
    }

    componentWillMount() {
        this.props.fetchRecipe(this.state.id)
    }

    componentWillReceiveProps(newProps){
        if (this.props.recipe !== newProps.recipe) {
            this.setState({changed: true});
          }
        }
    shouldComponentUpdate(newProps, newState){
        console.log("New Props:", newProps);
        console.log("New Props:", newState);
        return true

    }


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
  let recipe = {...this.state, id: this.props.recipe.id}
   this.props.editRecipe(recipe)
   this.setState({
       name: this.props.name,
       instructions: this.props.instructions,
       ingredients: this.props.ingredients,
       time: this.props.time,
       isClicked: !this.state.isClicked

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
                        onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                        <textarea
                            type='text'
                            placeholder='Edit Instructions'
                            value={this.state.instructions}
                            name='instructions'
                            onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                    <input
                        type='text'
                        placeholder='Edit Ingredients'
                        value={this.state.ingredients} 
                        name='ingredients'
                        onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                    <input
                        type='text'
                        placeholder='Edit Time'
                        value={this.state.time} 
                        name='time'
                        onChange={this.handleOnChange} />
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

// class Logger extends Component{

