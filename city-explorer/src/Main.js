import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Components/Map';
import AlertError from './Components/Map';
import CityData from './Components/CityData';
import SearchForm from './Components/SearchForm';
import Weather from './Components/Weather';
import Container from 'react-bootstrap/Container';
// require('dotenv').config();

const weatherAPi = process.env.REACT_APP_WEATHER_API

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citesName: '',
      citesInformation: {},
      displayData: false,
      alert: false,
      error: '',
      data: []
    }
  }

  updateNamesOfCites = (event) => {
    this.setState({
      citesName: event.target.value
    })
  }

  citeData = async (event) => {
    event.preventDefault();
    try {

      const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.ca5effb8d48edb0ee35fbc92c2daf295&city=${this.state.citesName}&format=json`);
      const weatherData = await axios.get(`${weatherAPi}/weather`);
      // console.log(weatherData)
      this.setState({
        citesInformation: axiosResponse.data[0],
        displayData: true,
        alert: false,
        data: weatherData.data
      })
    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
  }





  render() {
    return (
      <div>
        {this.setState.alert &&
          <AlertError
            error={this.state.error} />
        }
        <Container>
          <SearchForm
            citeData={this.citeData}
            updateNamesOfCites={this.updateNamesOfCites} />
          {(this.state.displayData) &&
            <>
              <Map

                citesInformation={this.state.citesInformation}
              />
              <CityData
                citesInformation={this.state.citesInformation}
              />
              <Weather data={this.state.data} />
            </>
          }


        </Container>
      </div>
    )
  }
}

export default Main