import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export class Map extends Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.ca5effb8d48edb0ee35fbc92c2daf295&q&center=${this.props.citesInformation.lat},${this.props.citesInformation.lon}&zoom=13`} />

            </div>
        )
    }
}

export default Map