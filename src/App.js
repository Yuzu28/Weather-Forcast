// import React from 'react';
import React, {Component} from 'react';
//import react object from the react package
import './App.css';

//import the title of sites from components
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
//in prgress
const API_KEY = "8b60410aeeb38245c7fde0afbabc11b9";

// `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
class App extends Component {
  render(){

    // it can only one single element
    return (
      <div>
        < Titles />
        < Form />
        < Weather />
      </div>
    )
  };
}

export default App;


