import * as actionTypes from './actionTypes'

export const loginUser = (url, payload) => {
  return {
    type: actionTypes.LOGIN_PROCESS,
    endpoint: url,
    params: payload,
  }
}

export const changeProfileUser = (url, payload, file) => {
  console.log('file',file)
  return {
    type: actionTypes.CHANGE_PROFILE_PROCESS,
    endpoint: url,
    params: payload,
    file : file
  }
}

export const logOutUser = (url, payload) => {
  return {
    type: actionTypes.LOGOUT_PROCESS,
    endpoint: url,
    params: payload,
  }
}
