import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {


  render() {
    

    return (
      <div>
        <Button bsStyle="primary" onClick={(event) => this.open("showAdd", currentIndex)}>Add Recipe</Button>
      </div>
    };
  }
      
  
 
  


export default App;
