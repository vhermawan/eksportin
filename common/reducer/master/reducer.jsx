import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  categoryNews: [],
  categoryUmkms: [],
  categoryBuyers: [],
  categoryStakeholders: [],
  categoryCourses: [],
}

export default function stateMaster(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_NEWS_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.GET_CATEGORY_NEWS_SUCCESS: {
      return {
        ...state,
        categoryNews: action.categoryNews,
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_NEWS_FAIL: {
      return {
        ...state,
        categoryNews: [],
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_UMKM_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.GET_CATEGORY_UMKM_SUCCESS: {
      return {
        ...state,
        categoryUmkms: action.categoryUmkms,
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_UMKM_FAIL: {
      return {
        ...state,
        categoryUmkms: [],
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_BUYER_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.GET_CATEGORY_BUYER_SUCCESS: {
      return {
        ...state,
        categoryBuyers: action.categoryBuyers,
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_BUYER_FAIL: {
      return {
        ...state,
        categoryBuyers: [],
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_STAKEHOLDER_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.GET_CATEGORY_STAKEHOLDER_SUCCESS: {
      return {
        ...state,
        categoryStakeholders: action.categoryStakeholders,
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_STAKEHOLDER_FAIL: {
      return {
        ...state,
        categoryStakeholders: [],
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_COURSES_PROCESS: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.GET_CATEGORY_COURSES_SUCCESS: {
      return {
        ...state,
        categoryCourses: action.categoryCourses,
        loading: false,
      }
    }
    case actionTypes.GET_CATEGORY_COURSES_FAIL: {
      return {
        ...state,
        categoryCourses: [],
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
