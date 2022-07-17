import { put } from 'redux-saga/effects'

import { createStandaloneToast } from '@chakra-ui/react'
import * as actionTypes from '@/common/reducer/detailPage/actionTypes'
import { API } from '@/common/api/api'

import Cookies from 'js-cookie'
import router from 'next/router'

export function* getDetailNews(action) {
  console.log('slug tes',action.slug)

  const content = yield API.get(`/news-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_DETAIL_NEWS_SUCCESS,
      detail_news: content.data.data.news,
    })
  }
}

export function* getDetailStakeholder(action) {
  const content = yield API.get(`/stakeholder-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_DETAIL_STAKEHOLDER_SUCCESS,
      detail_stakeholder: content.data.data.stakeholder,
    })
  }
}

export function* getDetailBuyer(action) {
  const content = yield API.get(`/buyer-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_DETAIL_BUYER_SUCCESS,
      detail_buyer: content.data.data.buyer,
    })
  }
}

export function* getDetailUmkm(action) {
  const content = yield API.get(`/umkm-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_DETAIL_UMKM_SUCCESS,
      detail_umkm: content.data.data.umkm,
    })
  }
}

export function* getDetailCourse(action) {
  const toast = createStandaloneToast()
  let token = Cookies.get('token')

  if (token === undefined) {
    router.push('/')
    toast({
      title: 'Anda belum login, silahkan login untuk mengakses materi!',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `error`,
    })
  } else {
    const content = yield API.get(`/course-detail/${action.slug}`)
    if (content.status === 200) {
      yield put({
        type: actionTypes.GET_DETAIL_COURSE_SUCCESS,
        detail_course: content.data.data.course,
      })
    }
  }
}
