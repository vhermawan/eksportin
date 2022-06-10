import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  auth: null,
  message: null,
}

export default function stateRegister(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        auth: action.auth,
        loading: false,
      }
    }
    case actionTypes.REGISTER_FAIL: {
      return {
        ...state,
        auth: action.auth,
        loading: false,
        message: action.message,
      }
    }
    default: {
      return state
    }
  }
}
