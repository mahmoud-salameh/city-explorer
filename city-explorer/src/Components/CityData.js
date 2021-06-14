import React, { Component } from 'react'

export class CityData extends Component {
    render() {
        return (
            <div>
                <p>`This City Name : {this.props.citesInformation.display_name}`</p>
                <p>`This Lat : {this.props.citesInformation.lat}`</p>
                <p>`This lon : {this.props.citesInformation.lon}`</p>
            </div>
        )
    }
}

export default CityData
