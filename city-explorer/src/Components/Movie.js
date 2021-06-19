import React, { Component } from 'react'

import Image from 'react-bootstrap/Image'


export class Movie extends Component {
    render() {
        return (
            <div>
                 <Image variant="top" src={this.props.image_url}/>
                               <br></br>
                                <br></br>
                               {this.props.title}
                                <br></br>
                                <br></br>
                                {this.props.overview}
                                <br></br>
                                {this.props.average_votes}
                                <br></br>
                                {this.props.totalVotes}
                                <br></br>
                                {this.props.popularity}
                                <br></br>
                                {this.props.released_on}
            </div>
        )
    }
}

export default Movie
