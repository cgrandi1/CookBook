import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeContainer from './container/RecipeContainer'


class App extends Component {
  componentDidMount() {

  }
  render() {
   return (
    <div className="App">
      <RecipeContainer />
    </div>
  );
 }
}


export default connect()(App);

