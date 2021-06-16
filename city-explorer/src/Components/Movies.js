import React, { Component } from 'react'



export class Movies extends Component {


    render() {
        return (
            <>
                {

                    this.props.data.map((value) => {
                        return (
                            <div className='Movies' key={value.date}>
                                {value.title}
                                <br></br>
                                {value.overview}
                                <br></br>
                                {value.averageVotes}
                                <br></br>
                                {value.totalVotes}
                                <br></br>
                                {value.imgUrl}
                                <br></br>
                                {value.popularity}
                                <br></br>
                                {value.releasedOn}
                            </div>
                        )
                    })
                }


            </>
        )
    }
}

export default Movies