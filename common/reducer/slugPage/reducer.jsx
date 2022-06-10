import * as actionTypes from './actionTypes'

const initialState = {
  loading: true,
  slug_news: null,
  detail_news: null,
  slug_buyer: null,
  detail_buyer: null,
  slug_stakholder: null,
  detail_stakeholder: null,
  slug_course: null,
  detail_course: null,
  slug_umkm: null,
  detail_umkm: null,
}

export default function stateSlugPage(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_SLUG_NEWS_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_SLUG_NEWS_SUCCESS: {
      return {
        ...state,
        slug_news: action.slug,
        detail_news: action.detail_news,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_NEWS_FAIL: {
      return {
        ...state,
        slug_news: null,
        detail_news: null,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_STAKEHOLDER_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_SLUG_STAKEHOLDER_SUCCESS: {
      return {
        ...state,
        slug_stakeholder: action.slug,
        detail_stakeholder: action.detail_stakeholder,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_STAKEHOLDER_FAIL: {
      return {
        ...state,
        slug_stakeholder: null,
        detail_stakeholder: null,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_BUYER_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_SLUG_BUYER_SUCCESS: {
      return {
        ...state,
        slug_buyer: action.slug,
        detail_buyer: action.detail_buyer,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_BUYER_FAIL: {
      return {
        ...state,
        slug_buyer: null,
        detail_buyer: null,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_COURSE_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_SLUG_COURSE_SUCCESS: {
      return {
        ...state,
        slug_course: action.slug,
        detail_course: action.detail_course,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_COURSE_FAIL: {
      return {
        ...state,
        slug_course: null,
        detail_course: null,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_UMKM_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_SLUG_UMKM_SUCCESS: {
      return {
        ...state,
        slug_umkm: action.slug,
        detail_umkm: action.detail_umkm,
        loading: true,
      }
    }
    case actionTypes.GET_SLUG_UMKM_FAIL: {
      return {
        ...state,
        slug_umkm: null,
        detail_umkm: null,
        loading: true,
      }
    }
    default: {
      return state
    }
  }
}
