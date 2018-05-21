import React, { Component } from 'react'
import Draggable from 'react-draggable'

class PictureEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictureLocation: this.props.pictureLocation,
      pictureUrl: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png' // Hardcodded for now - in future implementation will change.
    }
  }

  handleDragStop = (e, data) => {
    let { x, y } = data
    let pictureLocation = { x, y }
    this.setState({ pictureLocation })
    this.props.onLocationChanged(pictureLocation)
  }

  render() {
    const { x, y } = this.state.pictureLocation
    return (
      <div className="image-container">
      <Draggable
        position={{ x, y }}
        onStop={this.handleDragStop}
        bounds="parent">
          <img src={this.state.pictureUrl} />
      </Draggable>
      </div>
    )
  }
}

export default PictureEdit
