import * as actionTypes from './actionTypes'

export const registerUser = (url, payload) => {
  return {
    type: actionTypes.REGISTER_PROCESS,
    endpoint: url,
    params: payload,
  }
}
