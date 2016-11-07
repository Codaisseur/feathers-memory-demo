import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import './SignUp.sass'

const textFieldStyle = {
  width: '96%'
}

class SignUp extends Component {
  submitForm(event) {
    event.preventDefault()

    const { name, email, password, passwordConfirmation } = this.refs

    console.log('name: ', name.getValue())
    console.log('email: ', email.getValue())
    console.log('password: ', password.getValue())
    console.log('passwordConfirmation: ', passwordConfirmation.getValue())
  }

  render() {
    return (
      <Paper className="sign-up" zDepth={3}>
        <form onSubmit={ this.submitForm.bind(this) }>
          <h1>Sign Up</h1>

          <div className="input">
            <TextField
              style={ textFieldStyle }
              ref="name"
              hintText="Name"
              floatingLabelText="Your name"
              type="text"
            />
          </div>

          <div className="input">
            <TextField
              style={ textFieldStyle }
              ref="email"
              hintText="Email"
              floatingLabelText="Email"
              type="email"
            />
          </div>

          <div className="input">
            <TextField
              style={ textFieldStyle }
              ref="password"
              hintText="Password"
              floatingLabelText="Password"
              type="password"
            />
          </div>

          <div className="input">
            <TextField
              style={ textFieldStyle }
              ref="passwordConfirmation"
              hintText="Password Confirmation"
              floatingLabelText="Confirm your password"
              type="password"
            />
          </div>

          <div className="controls">
            <FlatButton label="Sign in" href="/sign-in" />
            <RaisedButton type="submit" label="Sign up" primary={true}  />
          </div>
        </form>
      </Paper>
    )
  }
}

export default SignUp
