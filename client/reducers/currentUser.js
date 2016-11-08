import { SIGN_IN_USER } from '../actions/sign-in-user'
import { SIGN_OUT_USER } from '../actions/sign-out-user'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case SIGN_IN_USER :
      return payload

    case SIGN_OUT_USER :
      return {}

    default :
      return state
  }
}
