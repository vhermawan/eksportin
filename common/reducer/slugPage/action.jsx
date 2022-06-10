import * as actionTypes from './actionTypes'

export const setSlugNews = (slug) => {
  return {
    type: actionTypes.GET_SLUG_NEWS_PROCESS,
    slug: slug,
  }
}

export const setSlugStakeholder = (slug) => {
  return {
    type: actionTypes.GET_SLUG_STAKEHOLDER_PROCESS,
    slug: slug,
  }
}

export const setSlugCourse = (slug) => {
  return {
    type: actionTypes.GET_SLUG_COURSE_PROCESS,
    slug: slug,
  }
}

export const setSlugBuyer = (slug) => {
  return {
    type: actionTypes.GET_SLUG_BUYER_PROCESS,
    slug: slug,
  }
}

export const setSlugUmkm = (slug) => {
  return {
    type: actionTypes.GET_SLUG_UMKM_PROCESS,
    slug: slug,
  }
}
