import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    
    this.state = { zip: '', response: [], hillaryList: '', trumpList: '' };
}

componentDidMount() {
}

    render() {
      return (
        <div id="main">
          <h1>FECensus</h1>
          <InputSubmission/>

        </div>
      );
    }
  }
export default App;