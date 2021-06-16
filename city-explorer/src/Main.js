import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Components/Map';
import AlertError from './Components/Map';
import CityData from './Components/CityData';
import SearchForm from './Components/SearchForm';
import Weather from './Components/Weather';
import Container from 'react-bootstrap/Container';
import Movies from './Components/Movies';

// require('dotenv').config();

const weatherAPi = process.env.REACT_APP_WEATHER_API
const movieAPi = process.env.REACT_APP_WEATHER_API

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citesName: '',
      lat: '',
      lon: '',
      citesInformation: {},
      displayData: false,
      alert: false,
      error: '',
      movieDatas: [],
      weatherData: [],
      moviesData:''
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

       await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.ca5effb8d48edb0ee35fbc92c2daf295&city=${this.state.citesName}&format=json`)
      .then(locationResponce => {
      
        this.setState({
          citesInformation: locationResponce.data[0],
          lat: locationResponce.data[0].lat,
          lon: locationResponce.data[0].lon,
        
      })
      // console.log(1)
      this.weatherData(locationResponce.data[0].lat, locationResponce.data[0].lon)
      this.movieData(this.state.citesName)
      })
      
    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
    
   
  }


  
  weatherData = async (lat, lon) => {
    try {

    //  console.log(2)
      axios.get(`${weatherAPi}/Weather?lat=${lat}&lon=${lon}`).then(WeatherResponse =>{
        // console.log(WeatherResponse.data)
        this.setState({
          weatherData: WeatherResponse.data,
          displayData: true,
          alert: false
        })
      
      })

    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
  }

  
  movieData = async (moviesData) => {
    try {
      console.log(moviesData)
      axios.get(`${movieAPi}/movies?city=${moviesData}`).then(movieResponse =>{
        console.log(movieResponse.data)
        this.setState({
          movieDatas: movieResponse.data,
          displayData: true,
          alert: false
        })
      
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
              <Weather data={this.state.weatherData} />

              <Movies data={this.state.movieDatas} />
            </>
          }


        </Container>
      </div>
    )
  }
}

export default Main