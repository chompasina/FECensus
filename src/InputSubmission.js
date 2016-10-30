import React, { Component } from 'react';
import axios from 'axios';

class InputSubmission extends Component {
  constructor(){
    super();
    
      this.state = { zip: '', response: ''};
  }
  
  handleClick(e) {
    this.fetchByZip(this.state.zip); 
    // this.props.sendZip( Object.assign(this.state.zip, {id: Date.now()}) );
    // this.setState( {zip: '', result: ''} );
  }
  
  fetchByZip(zip){
    axios.get(`https://api.open.fec.gov/v1/schedules/schedule_a/by_zip/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&zip=${zip}&page=1&per_page=100&cycle=2016`)
      .then(res => {
        console.log(res.data.results);
        const response = res.data.results;
        this.setState({ response });
      });
  }
  
  fetchTrump(){
    let list = '';
    this.state.response.map((item) => { 
      if(item.committee_id === 'C00580100'){
        list = <li key={item.committee_id + item.total + item.count}>Total: {item.total}, Committee ID: {item.committee_id} State: {item.state_full}, Cycle: {item.cycle}</li>
      }
    } ) 
    return list
  }
  
  fetchHillary(){
    let list = '';
    this.state.response.map((item) => { 
      if(item.committee_id === 'C00575795'){
        list = <li key={item.committee_id + item.total + item.count}>Total: {item.total}, Committee ID: {item.committee_id} State: {item.state_full}, Cycle: {item.cycle}</li>
      }
    } ) 
    return list
  }

  
  render() {
      return (
        <div className='InputSubmissionForm'>
          <input
            type='text'
            placeholder='Zipcode'
            value={ this.state.zip }
            onChange={ ( event ) => this.setState({ zip: event.target.value }) }
             /><br/>

          <button id="button" onClick={ this.handleClick.bind(this) }>Submit</button>
          
          <ul>
          {this.state.response ? this.fetchTrump() : <li>"Please submit a zipcode to see the data"</li> }
          </ul>
        </div>
      )
  }
}

export default InputSubmission;