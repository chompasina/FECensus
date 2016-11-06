import React, { Component } from 'react';
import axios from 'axios';
// import Datamap from './Datamap';

class States extends Component {
  constructor(){
    super();
    this.fetchTrump('P80001571');
    this.fetchHillary('P00003392');
    this.state = { clintonTotal: '', trumpTotal: ''};
  }
  
  fetchHillary(candidate){
    axios.get(`https://api.open.fec.gov/v1/schedules/schedule_a/by_state/by_candidate/?cycle=2016&page=1&api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&candidate_id=${candidate}&per_page=100&election_full=true`)
      .then(res => {
            var states = res.data.results;
            this.setState({ clintonTotal: states }); 
      });
    };
  fetchTrump(candidate){
    axios.get(`https://api.open.fec.gov/v1/schedules/schedule_a/by_state/by_candidate/?cycle=2016&page=1&api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&candidate_id=${candidate}&per_page=100&election_full=true`)
      .then(res => {
            var states = res.data.results;
            this.setState({ trumpTotal: states }); 
      });
    };
  
  
    // { Datamap }
  
  render(){
    return (
      <div className='states'  >
      <ul>
        <li> Clinton funds across the states: {this.state.clintonTotal ? this.state.clintonTotal.map(state => <p key={state.state}>State: {state.state_full} | Clinton Total: {state.total}</p>) : 'Everything broken' } </li>
        <li> Trump funds across the states: {this.state.trumpTotal ? this.state.trumpTotal.map(state => <p key={state.state}>State: {state.state_full} | Trump Total: {state.total}</p>) : 'Everything broken' } </li>
      </ul>
      </div>
    );
  }
}


export default States;