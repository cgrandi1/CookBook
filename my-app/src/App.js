import React, { Component } from 'react';
import {connect} from 'react-redux'
import Main from './container/Main'


class App extends Component {
  componentDidMount() {

  }
  render() {
   return (
    <div className="App">
      <Main />
    </div>
  );
 }
}


export default connect()(App);

