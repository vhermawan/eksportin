import * as actionTypes from './actionTypes'

const initialState = {
  loading: true,
  detail_news: null,
  detail_buyer: null,
  detail_stakeholder: null,
  detail_course: null,
  detail_umkm: null,
}

export default function stateDetailPage(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_DETAIL_NEWS_PROCESS: {
      return {
        ...state, 
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_NEWS_SUCCESS: {
      return {
        ...state,
        detail_news: action.detail_news,
        loading: false,
      }
    }
    case actionTypes.GET_DETAIL_NEWS_FAIL: {
      return {
        ...state,
        detail_news: null,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_STAKEHOLDER_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_DETAIL_STAKEHOLDER_SUCCESS: {
      return {
        ...state,
        detail_stakeholder: action.detail_stakeholder,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_STAKEHOLDER_FAIL: {
      return {
        ...state,
        detail_stakeholder: null,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_BUYER_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_DETAIL_BUYER_SUCCESS: {
      return {
        ...state,
        detail_buyer: action.detail_buyer,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_BUYER_FAIL: {
      return {
        ...state,
        detail_buyer: null,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_COURSE_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_DETAIL_COURSE_SUCCESS: {
      return {
        ...state,
        detail_course: action.detail_course,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_COURSE_FAIL: {
      return {
        ...state,
        detail_course: null,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_UMKM_PROCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case actionTypes.GET_DETAIL_UMKM_SUCCESS: {
      return {
        ...state,
        detail_umkm: action.detail_umkm,
        loading: true,
      }
    }
    case actionTypes.GET_DETAIL_UMKM_FAIL: {
      return {
        ...state,
        detail_umkm: null,
        loading: true,
      }
    }
    default: {
      return state
    }
  }
}
