import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission';
import ZipsList from './ZipsList';
// import FetchResults from './FetchResults';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    
    // this.state = { zips: [] };
    this.state = { zips: [], results: [] };
  
}
componentDidMount() {
  let zipsFromStorage = localStorage.getItem('zips');
  zipsFromStorage = JSON.parse(zipsFromStorage);

  this.setState({zips: zipsFromStorage ? zipsFromStorage : [], results: []});
  axios.get('https://api.open.fec.gov/v1/committee/C00575795/schedules/schedule_a/by_zip/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&page=370')
    .then(function(response){
      console.log(response.data);
      console.log(response.status);
      this.setState({ results: response.data });
    });
}

addZip(zip) {
    //here we will add an zip
    this.state.zips.push( zip );

    //set state.zips to local storage
    localStorage.setItem('zips', JSON.stringify(this.state.zips) );

    this.setState( {zips: this.state.zips} );
  }
  deleteZip(id){
      //make new array without zip
      let newZipsList = this.state.zips.filter((zip) => zip.id !== id );
      // change state of zips -> second argument is the callback to perform after setting state
      this.setState( {zips: newZipsList},
                        () => localStorage.setItem('zips', JSON.stringify(this.state.zips)) );
    }

    render() {
      return (
        <div id="main">
          <h1>FECensus</h1>
          <InputSubmission sendZip={ this.addZip.bind(this) } />
          <ZipsList zips={ this.state.zips } handleDeleteZip={ this.deleteZip.bind(this) } />
        </div>
      );
    }
  }
export default App;
