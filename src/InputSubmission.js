import React, { Component } from 'react';
import axios from 'axios';

class InputSubmission extends Component {
  constructor(){
    super();
    
      this.state = { zip: '', response: '', hillaryList: '', trumpList: ''};
  }
  
  handleClickTrump(e) {
    this.fetchTrump(this.state.zip, 'C00580100'); 
  }
  
  handleClickHillary(e) {
    this.fetchHillary(this.state.zip, 'C00575795'); 
    }
    
  handleClickBoth(e){
    this.fetchHillary(this.state.zip, 'C00575795');
    this.fetchTrump(this.state.zip, 'C00580100');
  }
  
  fetchHillary(zip, committee){
    axios.get(`https://api.open.fec.gov/v1/committee/${committee}/schedules/schedule_a/by_zip/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&zip=${zip}&page=1&per_page=100`)
      .then(res => {
        console.log(res.data.results);
        const hillaryList = res.data.results;
        this.setState({ hillaryList });
      });
  }
  
  fetchTrump(zip, committee){
    axios.get(`https://api.open.fec.gov/v1/committee/${committee}/schedules/schedule_a/by_zip/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&zip=${zip}&page=1&per_page=100`)
      .then(res => {
        console.log(res.data.results);
        const trumpList = res.data.results;
        this.setState({ trumpList });
      });
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

          <button className="button" id="hillary-button" onClick={ this.handleClickHillary.bind(this) }>Submit to see funding for Hillary within this zipcode</button>
          <button className="button" id="trump-button" onClick={ this.handleClickTrump.bind(this) }>Submit to see funding for Trump within this zipcode</button>
          <button className="button" id="both-button" onClick={ this.handleClickBoth.bind(this) }>Submit to compare candidates for this zipcode</button>
          
          <ul>
            <li> Trump donations:{this.state.trumpList ? this.state.trumpList.map(item => <p key={item.committee_id + item.total + item.count}>Trump Total: {item.total}, Committee ID: {item.committee_id} State: {item.state_full} Cycle: {item.cycle}</p>) : 'No donations' }</li>
            <li> Hillary donations:{this.state.hillaryList ? this.state.hillaryList.map(item => <p key={item.committee_id + item.total + item.count}>Hillary Total: {item.total}, Committee ID: {item.committee_id} State: {item.state_full}, Cycle: {item.cycle}</p>) : 'No donations' }</li>
          </ul>
        </div>
      );
  }
}


export default InputSubmission;