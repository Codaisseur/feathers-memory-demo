import api from '../middleware/api'

export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export default () => {
  api.signOut()
  return {
    type: SIGN_OUT_USER
  }
}
