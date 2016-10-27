import React, { Component } from 'react';

class InputSubmission extends Component {
  constructor(){
    super();
    
      this.state = { zip: ''};
  }
  
  handleClick(e) {
    this.props.sendZip( Object.assign(this.state, {id: Date.now()}) );

    //reset state
    this.setState( {zip: ''} );
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

          <button onClick={ this.handleClick.bind(this) } >Submit</button>
        </div>
      )
  }
}

export default InputSubmission;