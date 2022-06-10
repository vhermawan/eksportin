import { put } from 'redux-saga/effects'

import { createStandaloneToast } from '@chakra-ui/react'
import * as actionTypes from '@/common/reducer/slugPage/actionTypes'
import { API } from '@/common/api/api'

import Cookies from 'js-cookie'
import router from 'next/router'

export function* setSlugNews(action) {
  const content = yield API.get(`/news-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_SLUG_NEWS_SUCCESS,
      detail_news: content.data.data.news,
    })
    router.push(`/berita/detail/${action.slug}`)
  }
}

export function* setSlugStakeholder(action) {
  const content = yield API.get(`/stakeholder-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_SLUG_STAKEHOLDER_SUCCESS,
      detail_stakeholder: content.data.data.stakeholder,
    })
    router.push(`/instansi/detail/${action.slug}`)
  }
}

export function* setSlugBuyer(action) {
  const content = yield API.get(`/buyer-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_SLUG_BUYER_SUCCESS,
      detail_buyer: content.data.data.buyer,
    })
    router.push(`/pembeli/detail/${action.slug}`)
  }
  console.log('actions', action.slug)
}

export function* setSlugUmkm(action) {
  const content = yield API.get(`/umkm-detail/${action.slug}`)
  if (content.status === 200) {
    yield put({
      type: actionTypes.GET_SLUG_UMKM_SUCCESS,
      detail_umkm: content.data.data.umkm,
    })
    router.push(`/umkm/detail/${action.slug}`)
  }
}

export function* setSlugCourse(action) {
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
        type: actionTypes.GET_SLUG_COURSE_SUCCESS,
        detail_course: content.data.data.course,
      })
      router.push(`/materi/detail/${action.slug}`)
    }
  }
}
