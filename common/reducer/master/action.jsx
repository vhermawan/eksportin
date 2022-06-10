import * as actionTypes from './actionTypes'

export const getCategoryNews = (url, payload) => {
  return {
    type: actionTypes.GET_CATEGORY_NEWS_PROCESS,
    endpoint: url,
    params: payload,
  }
}

export const getCategoryUmkms = (url, payload) => {
  return {
    type: actionTypes.GET_CATEGORY_UMKM_PROCESS,
    endpoint: url,
    params: payload,
  }
}

export const getCategoryBuyers = (url, payload) => {
  return {
    type: actionTypes.GET_CATEGORY_BUYER_PROCESS,
    endpoint: url,
    params: payload,
  }
}

export const getCategoryStakeholders = (url, payload) => {
  return {
    type: actionTypes.GET_CATEGORY_STAKEHOLDER_PROCESS,
    endpoint: url,
    params: payload,
  }
}

export const getCategoryCourses = (url, payload) => {
  return {
    type: actionTypes.GET_CATEGORY_COURSES_PROCESS,
    endpoint: url,
    params: payload,
  }
}
