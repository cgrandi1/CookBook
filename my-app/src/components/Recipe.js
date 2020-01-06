
import React, { Component } from 'react';

class Recipe extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.recipe.name}</h2>
      <p>{this.props.recipe.instructions}</p>
    </div>
  );
 }
}
export default Recipe;