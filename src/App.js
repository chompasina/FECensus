import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission';
import ZipsList from './ZipsList';
import FetchResults from './FetchResults';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    
    this.state = { zip: '', response: [] };
}

componentDidMount() {
  // let zipsFromStorage = localStorage.getItem('zips');
  // let resultsFromStorage = localStorage.getItem('results');
  // zipsFromStorage = JSON.parse(zipsFromStorage);
  // resultsFromStorage = JSON.parse(resultsFromStorage);
  

  // this.setState({zips: zipsFromStorage ? zipsFromStorage : [], results:  resultsFromStorage ? resultsFromStorage : []});
}

// fetchByZip(zip){
//   axios.get(`https://api.open.fec.gov/v1/schedules/schedule_a/by_zip/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&zip=${zip}&page=1&per_page=100&cycle=2016`)
//     .then(res => {
//       console.log(res.data.results);
//       const response = res.data.results;
//       this.setState({ response });
//     });
// }

 // results: 
// addResult(result){
//   this.state.results.push(result);
//   localStorage.setItem('results', JSON.stringify(this.state.results) );
//   this.setState( {results: this.state.results} );
// }
// 
// addZip(zip) {
//     this.state.zips.push( zip );
//     localStorage.setItem('zips', JSON.stringify(this.state.zips) );
//     this.setState( {zips: this.state.zips} );
//   }
//   deleteZip(id){
//       let newZipsList = this.state.zips.filter((zip) => zip.id !== id );
//       this.setState( {zips: newZipsList},
//                         () => localStorage.setItem('zips', JSON.stringify(this.state.zips)) );
//     }

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
// <FetchResults/>
// response={ this.state.response }
// <InputSubmission sendZip={ this.addZip.bind(this) } sendResult={ this.addResult.bind(this)} />
// <ZipsList zips={ this.state.zips } handleDeleteZip={ this.deleteZip.bind(this) } />
// <ul>
// {this.state.response.map(oneResponse => 
//   <li key={oneResponse.committee_id + oneResponse.total + oneResponse.count}>Total: {oneResponse.total}, State: {oneResponse.state_full}, Cycle: {oneResponse.cycle}</li>
// )}
// </ul>


