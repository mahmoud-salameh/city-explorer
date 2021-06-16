import React, { Component } from 'react'



export class Weather extends Component {


    render() {
        return (
            <>
                {

                    this.props.data.map((element) => {
                        return (
                            <div className='weather' key={element.date}>
                                {element.date}
                                <br></br>
                                {element.desc}
                            </div>
                        )
                    })
                }


            </>
        )
    }
}

export default Weather
