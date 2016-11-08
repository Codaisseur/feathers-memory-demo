import api from '../middleware/api'
import { history } from '../store'

export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export default () => {
  api.signOut()
  history.push('/')
  return {
    type: SIGN_OUT_USER
  }
}
