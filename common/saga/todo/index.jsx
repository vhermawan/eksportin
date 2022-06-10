import { put } from 'redux-saga/effects'

import * as actionTypes from '../../reducer/todo/actionTypes'
import { API } from '../../api/api'

export function* getTodos(action) {
  const content = yield API.get(action.endpoint, action.params)
  yield put({
    type: actionTypes.TODO_SUCCESS,
    todos: content.data,
  })
}
