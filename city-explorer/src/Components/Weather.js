import React, { Component } from 'react'

import WeatherDay from './WeatherDay'

export class Weather extends Component {


    render() {
        return (
            <>
                {
                    
                    this.props.data.map((element, index) => {
                        return (
                          <WeatherDay 
                          key = {index.toString()}
                          date = {element.date}
                          desc = {element.desc}

                          />
                        )
                    })
                }


            </>
        )
    }
}

export default Weather
