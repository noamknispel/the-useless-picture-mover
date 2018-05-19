import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './styles/app.css'
import LoginForm from './components/login_form'
import User from './components/user'

class App extends Component {
  handleLogin = (history) => {
    window.localStorage.setItem('loggedIn', true)
    history.push('/user')
  }

  handleLogout = (history) => {
    window.localStorage.setItem('loggedIn', false)
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
