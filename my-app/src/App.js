import React, { Component } from 'react';
import './App.css';
// import addRecipe from '../src/container/addRecipe'
import { NavBar } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Router from './components/Router'


const Navigation = (props) => <nav>
  <ul>
    <li><NavBar to='/'>Home</NavBar></li>
    <li><NavBar to='/recipes'>Recipes</NavBar></li>
  </ul>
</nav>

class App extends Component {
  // I want to add a props component to get the open method and use currentIndex


  

  render() {
    

    return (
      <div>
        {/* <Button bsStyle="primary" onClick={(event) => {this.props.open("showAdd")}}>Add Recipe</Button> */}
        <Router />
        <Navigation />
      </div>
    )};
  }

  export default App;