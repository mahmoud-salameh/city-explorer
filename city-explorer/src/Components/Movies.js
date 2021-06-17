import React, { Component } from 'react'

import Image from 'react-bootstrap/Image'

export class Movies extends Component {


    render() {
        return (
            <>
                {

                    this.props.data.map((value) => {
                        return (
                            <div className='Movies' key={value.date}> 
                             <br></br>
                             <br></br>
                               <Image variant="top" src={value.image_url}/>
                               <br></br>
                                <br></br>
                               {value.title}
                                <br></br>
                                <br></br>
                                {value.overview}
                                <br></br>
                                {value.average_votes}
                                <br></br>
                                {value.totalVotes}
                                <br></br>
                                {value.popularity}
                                <br></br>
                                {value.released_on}
                            </div>
                        )
                    })
                }


            </>
        )
    }
}

export default Movies