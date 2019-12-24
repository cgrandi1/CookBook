import React, { Component } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar  from 'react-bootstrap/lib/ButtonToolbar'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import RecipeContainer from './container/RecipeContainer'
import Recipe from './components/Recipe'

class App extends Component {

  state ={
    recipes: [],
    showAdd: false
  }

  //deleteRecipe
  deleteRecipe(index){
    let recipes = this.state.recipes.splice();
    recipes.splice(index, 1);
    this.setState({recipes});

  }

  close = () => {
    if(this.state.showAdd){
      this.setState({showAdd: false})
    }
  }
  
  render() {
    const {recipes} = this.state

    return (
      <div className="App">
        <Accordion>
          {recipes.map((recipe, index)=>(
            <Panel header={recipe.name} eventKey={index} key={index}>
              <ul>
                {recipe.ingredients.map((item)=>
                  <li key={item}>
                    {item}
                  </li>
                )}
              </ul>
              <ButtonToolbar>
                <Button bsStyle="danger" onClick={(event)=>this.deleteRecipe(index)}>Delete Recipe</Button>
                <Button bsStyle="default">Edit Recipe</Button>
              </ButtonToolbar>

            </Panel>
          ))}
        </Accordion>
        <Modal show={this.state.showAdd} onHide={this.close}>

        </Modal>
        <Button bsStyle="primary">Add Recipe</Button>
    </div>

    );
  }
}

export default App;
