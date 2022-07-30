import * as actionTypes from './actionTypes'

export const loginUser = (url, payload) => {
  return {
    type: actionTypes.LOGIN_PROCESS,
    endpoint: url,
    params: payload,
  }
}

export const changeProfileUser = (url, payload, file, description) => {
  return {
    type: actionTypes.CHANGE_PROFILE_PROCESS,
    endpoint: url,
    params: payload,
    file: file,
    description: description,
  }
}

export const logOutUser = (url, payload) => {
  return {
    type: actionTypes.LOGOUT_PROCESS,
    endpoint: url,
    params: payload,
  }
}
