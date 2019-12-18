// import React from 'react';
import React, {Component} from 'react';
//import react object from the react package
import './App.css';

//import the title of sites from components
import Titles from './components/Titles';

// function App() {
//   return (
//     <div className="App">
     
//       <h1>
//         hello
//       </h1>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render(){

    // it can only one single element
    return (
      <div>< Titles />
      </div>
    )
  };
}

export default App;
