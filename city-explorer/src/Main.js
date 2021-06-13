import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export class Main extends Component {

    constructor(props){
      super(props);
      this.state = {
        citesName: "",
        displayData: false,
        citesInformation: {}
      }
    }
  
    updateNamesOfCites = (event) => {
      this.setState({
        citesName: event.target.value
      })
    }
  
    citeData = async (event) =>{
      event.preventDefault();
      let axiosResponse = await  axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.ca5effb8d48edb0ee35fbc92c2daf295&city=${this.state.citesName}&format=json`);
  
      this.setState({
        citesInformation: axiosResponse.data[0],
        displayData: true
      })
    }
  
  
  
    render() {
      return (
        <div>
         <Form onSubmit={this.citeData}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
  
        <Form.Label class='Form'>City Name</Form.Label>
        <br></br>
        <input onChange={this.updateNamesOfCites} type="text" />
      </Form.Group>
      <Button class='Button' variant="primary" type="submit"> Explore</Button>

  
      <p  class='paragraph'>{this.state.citesInformation.display_name}</p>
      {this.state.displayData &&

  
      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.ca5effb8d48edb0ee35fbc92c2daf295&q&center=${this.state.citesInformation.lat},${this.state.citesInformation.lon}&zoom=13`} alt='' />
      }
    </Form>
        </div>
      )
    }
  }
  
  export default Main