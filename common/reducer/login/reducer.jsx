import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  auth: null,
}

export default function stateLogin(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        auth: action.auth,
        loading: false,
      }
    }
    case actionTypes.LOGIN_FAIL: {
      return {
        ...state,
        auth: action.auth,
        loading: false,
      }
    }
    case actionTypes.CHANGE_PROFILE_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.CHANGE_PROFILE_SUCCESS: {
      return {
        ...state,
        auth: action.auth,
        loading: false,
      }
    }
    case actionTypes.CHANGE_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.LOGOUT_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        auth: null,
        loading: false,
      }
    }
    case actionTypes.LOGOUT_FAIL: {
      return {
        ...state,
        auth: action.auth,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
