import React from 'react'
import ProtectedComponent from './../helpers/protected_component'

class User extends ProtectedComponent {
  logout = () => {
    this.props.onLogout(this.props.history)
  }

  render() {
    return (
      <div className="row header-row">
        <div className="col-md-8">
          <h3>Welcome!</h3> <br />
          In this page you can choose the position of your profile picture! So exicting!
        </div>
        <div className="col-md-4">
          <span className="btn btn-default pull-right" onClick={this.logout}>Logout</span>
        </div>
      </div>
    )
  }
}

export default User
