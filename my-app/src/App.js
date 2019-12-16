import React, { Component } from 'react';
import './App.css';
import RecipeContainer from './components/RecipeContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Recipe List</h1>
        </div>
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
