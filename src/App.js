import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission';
import ZipsList from './ZipsList';

class App extends Component {
  constructor(){
    super();
    
    this.state = { zips: [] };
  
}
componentDidMount() {
  let zipsFromStorage = localStorage.getItem('zips');
  zipsFromStorage = JSON.parse(zipsFromStorage);

  this.setState({zips: zipsFromStorage ? zipsFromStorage : []});
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
        <div>
          <InputSubmission sendZip={ this.addZip.bind(this) } />

          <ZipsList zips={ this.state.zips } handleDeleteZip={ this.deleteZip.bind(this) } />
        </div>
      );
    }
  }
export default App;
