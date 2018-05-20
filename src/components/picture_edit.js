import React, { Component } from 'react'

import Draggable from 'react-draggable'

class PictureEdit extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.pictureLocation
  }

  handleDragStop = (e, data) => {
    let { x, y } = data
    let location = { x, y }
    this.setState(location)
    this.props.onLocationUpdated(location)
  }

  render() {
    return (
      <div className="image-container">
      <Draggable
        position={{x: this.state.x, y: this.state.y}}
        onStop={this.handleDragStop}
        bounds="parent">
          <img src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" />
      </Draggable>
      </div>
    )
  }
}

export default PictureEdit
