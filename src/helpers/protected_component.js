import { Component } from 'react'

class ProtectedComponent extends Component {
  componentWillMount() {
    let isLoggedIn = window.localStorage.getItem('loggedIn')
    isLoggedIn = String(isLoggedIn) === 'true'
    if(!isLoggedIn) this.props.history.push('/login')
  }
}

export default ProtectedComponent
