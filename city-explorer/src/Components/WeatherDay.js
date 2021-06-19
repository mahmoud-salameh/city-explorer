import React, { Component } from 'react'

export class WeatherDay extends Component {
    render() {
        return (
            
                  <div className='weather'>
                                {this.props.date}
                                <br></br>
                                {this.props.desc}
                            </div>
            
        )
    }
}

export default WeatherDay
