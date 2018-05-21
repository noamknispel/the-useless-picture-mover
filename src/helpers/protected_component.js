import { Component } from 'react'

// This class is for protect compnents that required logged in user

class ProtectedComponent extends Component {
  componentWillMount() {
    let isLoggedIn = window.localStorage.getItem('loggedIn')
    isLoggedIn = String(isLoggedIn) === 'true'
    if(!isLoggedIn) this.props.history.push('/login')
  }
}

export default ProtectedComponent
