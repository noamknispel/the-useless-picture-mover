import React from 'react'
import ProtectedComponent from './../helpers/protected_component'

import PictureEdit from './picture_edit'

const defaultLocation = { x: 0, y: 0 }
const localStorageKey = 'pictureLocation' // future implemntation thought - get key from config?

class User extends ProtectedComponent {
  constructor(props) {
    super(props)
    this.state = {
      pictureLocation: defaultLocation
    }
  }

  componentWillMount() {
    super.componentWillMount()
    const location = JSON.parse(window.localStorage.getItem(localStorageKey))
    this.setState({ pictureLocation: location || defaultLocation })
  }

  logout = () => {
    this.props.onLogout(this.props.history)
  }

  handlePictureLocationChanged = (pictureLocation) => {
    this.setState({ pictureLocation })
    window.localStorage.setItem(localStorageKey, JSON.stringify(pictureLocation))
  }

  render() {
    return (
      <div>
        <div className="row header-row">
          <div className="col-md-8">
            <h2>Welcome!</h2>
            In this page you can choose the position of your profile picture! So exicting!
          </div>
          <div className="col-md-4">
            <span className="btn btn-default pull-right" onClick={this.logout}>Logout</span>
          </div>
        </div>
        <div>
          <PictureEdit onLocationChanged={this.handlePictureLocationChanged} pictureLocation={this.state.pictureLocation}/>
        </div>
      </div>
    )
  }
}

export default User
