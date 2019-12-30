import React, { Component } from 'react';
import './App.css';
// import addRecipe from '../src/container/addRecipe'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import RecipePage from './container/RecipePage'

class App extends Component {

render() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path='/deserts' component={RecipePage} />
      </div>
    </Router>
  );
}

}

// class App extends Component {
  // I want to add a props component to get the open method and use currentIndex


  

  // render() {
    

  //   return (
  //     <div>
  //       {/* <Button bsStyle="primary" onClick={(event) => {this.props.open("showAdd")}}>Add Recipe</Button> */}
  //       <Router />
  //       <Navigation />
  //     </div>
  //   )};
  // }

  export default App;