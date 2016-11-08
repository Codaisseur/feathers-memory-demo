import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import signOutUser from '../actions/sign-out-user'

class Header extends Component {
  renderMenu() {
    const { signOutUser, userName, signedIn } = this.props

    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
        <MenuItem primaryText={ signedIn ? userName : 'Sign in' } onClick={ this.signIn.bind(this) } />
        <MenuItem primaryText={ signedIn ? 'Sign out' : 'Sign up' } onClick={ this.signUpOrOut.bind(this) } />
      </IconMenu>
    )
  }

  signIn() {
    const { signedIn } = this.props
    if (signedIn) return

    history.push('/sign-in')
  }

  signUpOrOut() {
    const { signedIn, signOutUser } = this.props
    if (signedIn) return signOutUser()

    history.push('/sign-up')
  }

  render() {
    return (

      <AppBar
        title="MemoryGame"
        iconElementRight={ this.renderMenu() }
      />
    )
  }
}

Header.propTypes = {
  signOutUser: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    signedIn: !!state.currentUser._id,
    userName: state.currentUser.name,
  }
}

export default connect(mapStateToProps, { signOutUser })(Header)
