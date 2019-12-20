// import React from 'react';
import React, {Component} from 'react';
//import react object from the react package

import axios from 'axios';
import './App.css';

//import the title of sites from components
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "8b60410aeeb38245c7fde0afbabc11b9";

// `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8b60410aeeb38245c7fde0afbabc11b9


class App extends Component {


  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    descrption: undefined,
    error: undefined,


  }

  getWeather = (e) =>  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8b60410aeeb38245c7fde0afbabc11b9`;
    // console.log(api_call);
    axios.get(api_call).then((response)=>{
      console.log(response.data);
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        descrption: response.data.weather[0].descrption,
        error: ""

      });
    })
  }
  render(){

    // it can only one single element
    return (
      <div>
        < Titles />
        {/* getweather as a prop in form */}
        < Form getWeather={this.getWeather} />
        < Weather 
        temperature= {this.state.temperature} 
        city= {this.state.city} 
        country= {this.state.country} 
        humidity= {this.state.humidity} 
        descrption= {this.state.descrption} 
        error = {this.state.error}

        />
      </div>
    )
  };
}

export default App;







// key isTerminatorless

// props is short for properties. They are single values or objects containing a set of values that are passed to React Components

//The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component
