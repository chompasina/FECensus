import React, { Component } from 'react';
import axios from 'axios';

class YearToDate extends Component {
  constructor(){
    super();
    this.state = { clintonTotal: '', trumpTotal: '' };
    this.fetchClinton('P00003392');
    this.fetchTrump('P80001571');
  }
  
  fetchClinton(candidate){
    axios.get(`https://api.open.fec.gov/v1/candidates/totals/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&page=1&per_page=20&cycle=2016&candidate_id=${candidate}`)
      .then(res => {
            var total = res.data.results[0]['receipts'];
            this.setState({ clintonTotal: total }); 
      });
    };
  fetchTrump(candidate){
    axios.get(`https://api.open.fec.gov/v1/candidates/totals/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&page=1&per_page=20&cycle=2016&candidate_id=${candidate}`)
      .then(res => {
            var total = res.data.results[0]['receipts'];
            this.setState({ trumpTotal: total }); 
      });
    };
  
  
  render(){
    return (
      <div> 
        <ul>
          <li> Clinton receipts to date: {this.state.clintonTotal} </li>
          <li> Trump receipts to date: {this.state.trumpTotal} </li>
        </ul>
      </div>
    );
  }
}

export default YearToDate;