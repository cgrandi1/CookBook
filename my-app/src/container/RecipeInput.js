// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createRecipe } from '../actions/RecipeActions'
// import RecipeForm from '../components/RecipeForm';




// class RecipeInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       recipes: {
//         name: " ",
//         instructions: []
//       },
//       saving: false,
//       // isOpen: false
//     }
//   }

//     // toggleModal = () => {
//     //   this.setState({
//     //     isOpen: !this.state.isOpen
//     //   })
//     // };

//     handleOnSubmit = event => {
//       event.preventDefault()
//       const { createRecipe } = this.props
//       createRecipe(this.state.recipe)
//       this.setState({
//         saving: !this.state.saving
//       })
//     }

//     handleOnChange = event => {
//       const name = event.target.name
//       const recipe = this.state.recipe
//       recipe[name] = event.target.value
//       this.setState({
//         recipe: recipe
//       })
//     }

//     // handleOnChangeInstructions = event => {
//     //   const instructions = event.target.instructions.split(" , ")
//     //   const recipe = this.state.recipe
//     //   note[instructions] = event.target.value
//     //   this.setState({
//     //     recipe: recipe
//     //   })
//     // }

//     render(){
//       return (
//         <div>
//           <h1>New Recipe</h1>
//           <RecipeForm
//             // toggleModal={this.toggleModal}
//             recipe={this.state.recipe}
//             onChange={this.handleOnChange}
//             onSubmit={this.handleOnSubmit} />
//         </div>
//       )
//     }
//   }

//   export default connect(null, { createRecipe })(RecipeInput);





