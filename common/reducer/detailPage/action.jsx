import * as actionTypes from './actionTypes'

export const getDetailNews = (slug) => {
  return {
    type: actionTypes.GET_DETAIL_NEWS_PROCESS,
    slug: slug,
  }
}

export const getDetailStakeholder = (slug) => {
  return {
    type: actionTypes.GET_DETAIL_STAKEHOLDER_PROCESS,
    slug: slug,
  }
}

export const getDetailCourse = (slug) => {
  return {
    type: actionTypes.GET_DETAIL_COURSE_PROCESS,
    slug: slug,
  }
}

export const getDetailBuyer = (slug) => {
  return {
    type: actionTypes.GET_DETAIL_BUYER_PROCESS,
    slug: slug,
  }
}

export const getDetailUmkm = (slug) => {
  return {
    type: actionTypes.GET_DETAIL_UMKM_PROCESS,
    slug: slug,
  }
}
