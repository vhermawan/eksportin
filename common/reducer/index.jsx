import { combineReducers } from 'redux'

import Todo from './todo/reducer'
import Auth from './login/reducer'
import Register from './register/reducer'
import MasterData from './master/reducer'
import SlugPageData from './slugPage/reducer'
import DetailPageData from './detailPage/reducer'

const reducers = combineReducers({
  todos: Todo,
  auth: Auth,
  register: Register,
  masterData: MasterData,
  slugPageData: SlugPageData,
  detailPageData: DetailPageData,
})

export default reducers
