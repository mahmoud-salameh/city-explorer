import React, { Component } from 'react'
import Movie from './Movie'


export class Movies extends Component {


    render() {
        return (
            <>
                {

                    this.props.data.map((value, index) => {
                        return (
                           
                             <Movie
                              key={index.toString()}
                              image_url ={value.image_url}
                              title ={value.title}
                              overview ={value.overview}
                              average_votes ={value.average_votes}
                              totalVotes ={value.totalVotes}
                              popularity ={value.popularity}
                              released_on ={value.released_on}

                              
                              
                              
                              />
                           
                        )
                    })
                }


            </>
        )
    }
}

export default Movies