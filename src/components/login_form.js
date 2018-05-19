import React, { Component } from 'react'
const EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onLogin(this.props.history)
  }

  isValid() {
    let { email, password } = this.state
    const valid = email.length > 0 && password.length > 0 && EMAIL.test(email)
    if (valid) return ''
    return valid.toString()
  }

  render() {
    return (
      <div className="row">
        <div className="login col-md-4 col-md-offset-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-default submit-button" disabled={this.isValid()}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
