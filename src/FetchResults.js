// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// 
// class FetchResults extends React.Compontent {
//   constructor(props) {
//     super(props);
//     
//     this.state = {
//       results: []
//     };
//   }
//   
//   componentDidMount(){
//     axios.get(`https://api.open.fec.gov/v1/committee/C00575795/schedules/schedule_a/by_zip/?api_key=nf4kDqBq4hjGmFR5gMmBc8XWjlwCWDFdHK9GoerZ&page=370&per_page=50.json`)
//       .then(function(response){
//         console.log(response.data);
//         console.log(response.status);
//         this.setState({ results });
//       });
//   }
//   
//   render(){
//     return(
//       <div><h1>Results</h1>
//         <ul>
//           {this.state.results.map(result =>
//             <li key={result.state}>{result.total}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
// 
// ReactDOM.render(
//   <FetchResults subsearch="reactjs"/>,
//   document.getElementById('root')
// );
