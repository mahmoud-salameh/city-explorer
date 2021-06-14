import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'


export class AlertError extends Component {
    render() {
        return (
            <div>
                <Alert variant = 'danger'>The {this.props.error}</Alert>
            </div>
        )
    }
}

export default AlertError
