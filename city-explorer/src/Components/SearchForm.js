import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class SearchForm extends Component {
    render() {
        return (
            <div>
                 <Form onSubmit={this.props.citeData}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
  
        <Form.Label className='Form'>City Name</Form.Label>
        <br></br>
        <input onChange={this.props.updateNamesOfCites} type="text" />
      </Form.Group>
      <Button className='Button' variant="primary" type="submit"> Explore</Button>
      </Form>
            </div>
        )
    }
}

export default SearchForm
