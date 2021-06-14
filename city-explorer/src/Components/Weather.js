import React, { Component } from 'react'
import '../style.css'

export class Weather extends Component {


    render() {
        return this.props.data.map((element)=>{
            return  (
                <div className='weather' key={element.date}>
                    {element.date} = '>' {element.desc}
                </div>
            )
        })
    }
}

export default Weather
