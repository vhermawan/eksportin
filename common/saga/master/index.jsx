import { put } from 'redux-saga/effects'

import * as actionTypes from '@/common/reducer/master/actionTypes'
import { API } from '@/common/api/api'

export function* getCategoryNews(action) {
  const content = yield API.get(action.endpoint)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_CATEGORY_NEWS_SUCCESS,
      categoryNews: content.data.data.category,
    })
  } else {
    yield put({
      type: actionTypes.GET_CATEGORY_NEWS_FAIL,
      categoryNews: [],
    })
  }
}

export function* getCategoryUmkms(action) {
  const content = yield API.get(action.endpoint)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_CATEGORY_UMKM_SUCCESS,
      categoryUmkms: content.data.data.category,
    })
  } else {
    yield put({
      type: actionTypes.GET_CATEGORY_UMKM_FAIL,
      categoryUmkms: [],
    })
  }
}

export function* getCategoryBuyers(action) {
  const content = yield API.get(action.endpoint)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_CATEGORY_BUYER_SUCCESS,
      categoryBuyers: content.data.data.category,
    })
  } else {
    yield put({
      type: actionTypes.GET_CATEGORY_BUYER_FAIL,
      categoryBuyers: [],
    })
  }
}

export function* getCategoryStakeholders(action) {
  const content = yield API.get(action.endpoint)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_CATEGORY_STAKEHOLDER_SUCCESS,
      categoryStakeholders: content.data.data.category,
    })
  } else {
    yield put({
      type: actionTypes.GET_CATEGORY_STAKEHOLDER_FAIL,
      categoryStakeholders: [],
    })
  }
}

export function* getCategoryCourses(action) {
  const content = yield API.get(action.endpoint)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_CATEGORY_COURSES_SUCCESS,
      categoryCourses: content.data.data.category,
    })
  } else {
    yield put({
      type: actionTypes.GET_CATEGORY_COURSES_FAIL,
      categoryCourses: [],
    })
  }
}
