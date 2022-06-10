import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  todos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE_COUNT: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.TODO_SUCCESS: {
      return {
        ...state,
        todos: action.todos,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
