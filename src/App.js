// import React from 'react';
import React, {Component} from 'react';
//import react object from the react package

import axios from 'axios';
import './App.css';

//import the title of sites from components
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { isTerminatorless } from '@babel/types';

const API_KEY = "8b60410aeeb38245c7fde0afbabc11b9";

// `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8b60410aeeb38245c7fde0afbabc11b9


class App extends Component {
  getWeather = () =>  {
    const api_call = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8b60410aeeb38245c7fde0afbabc11b9`;
    console.log(api_call);
    axios.get(api_call).then((response)=>{
      console.log(response.data);
    })
  }
  render(){

    // it can only one single element
    return (
      <div>
        < Titles />
        {/* getweather as a prop in form */}
        < Form getWeather={this.getWeather} />
        < Weather />
      </div>
    )
  };
}

export default App;







// key isTerminatorless

// props is short for properties. They are single values or objects containing a set of values that are passed to React Components


