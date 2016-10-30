import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// 
const FetchResults = ( { results } ) => {
  return(
    <div>
      {results.map((result) => <Result {...result}
                                        key={result.id}
                                        /> )}
    </div>
  )
}

const Result = ({ result, id }) => {
  return(
    <div id={id} className="result">
      <h1>{ result }</h1>
    </div>
  )
}

export default FetchResults;
