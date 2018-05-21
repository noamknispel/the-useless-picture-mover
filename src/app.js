import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './styles/app.css'
import LoginForm from './components/login_form'
import User from './components/user'

const loggedInKey = 'loggedIn' // This key is used in ProtectedComponent as well, need to move it to such of config

class App extends Component {
  handleLogin = (history) => {
    window.localStorage.setItem(loggedInKey, true)
    history.push('/user')
  }

  handleLogout = (history) => {
    window.localStorage.setItem(loggedInKey, false)
    history.push('/login')
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => (<LoginForm onLogin={this.handleLogin} {...props} />)} />
          <Route path="/user" render={(props) => (<User onLogout={this.handleLogout} {...props} />)} />
          <Route path="/" render={() => (<Redirect to="/user" />)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
