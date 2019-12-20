import React, {Component} from 'react';

class Weather extends Component{
   
    render(){
        console.log(this.props.temperature)
        return(
            <div>
                
                {this.props.temperature}
                {this.props.city}         
                {this.props.country} 
                 {this.props.humidity} 
                {this.props.description} 
                {this.props.error}
            </div>

        )
    }
}

export default Weather;