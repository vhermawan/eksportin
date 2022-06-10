/* eslint-disable no-undef */
import { put } from 'redux-saga/effects'

import * as actionTypes from '@/common/reducer/login/actionTypes'
import { API } from '@/common/api/api'

import { createStandaloneToast } from '@chakra-ui/react'
import router from 'next/router'

import Cookies from 'js-cookie'

export function* loginUser(action) {
  const toast = createStandaloneToast()
  const params = new FormData()
  params.set('email', action.params.email)
  params.set('password', action.params.password)

  const content = yield API.post(action.endpoint, params)

  if (content.status === 400) {
    yield put({
      type: actionTypes.LOGIN_FAIL,
    })
    toast({
      title: 'Login Gagal',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `error`,
    })
  } else if (content.status === 200) {
    Cookies.set('token', content.data.access_token, { expires: 1 })

    const currentDateTime = new Date()
    const updateDateTime = new Date()
    const expireDateTime = new Date(
      updateDateTime.setHours(updateDateTime.getHours() + 12),
    )

    const currentTimestamp = Math.floor(currentDateTime.getTime() / 1000)
    const expireTimeStamp = Math.floor(expireDateTime.getTime() / 1000)

    const initialState = {
      isLogin: true,
      loginTime: currentTimestamp,
      expirationTime: expireTimeStamp,
    }
    Cookies.set(
      'loginTimes',
      Buffer.from(JSON.stringify(initialState)).toString('base64'),
      { expires: 1 },
    )

    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      auth: content.data,
    })
    router.push('/')
  } else if (content.status === 401) {
    yield put({
      type: actionTypes.LOGIN_FAIL,
    })
    toast({
      title: 'Akun anda belum aktif silahkan lakukan aktivasi terlebih dahulu!',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `error`,
    })
  }
}

export function* logOutUser(action) {
  const toast = createStandaloneToast()
  const content = yield API.post(action.endpoint)
  if (content.status === 400) {
    yield put({
      type: actionTypes.LOGOUT_FAIL,
    })
    toast({
      title: 'Logout Gagal',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `error`,
    })
  } else if (content.status === 200) {
    Cookies.remove('token', { path: '/', domain: 'localhost' })
    Cookies.remove('loginTimes', { path: '/', domain: 'localhost' })
    yield put({
      type: actionTypes.LOGOUT_SUCCESS,
      auth: null,
    })
    router.push('/')
  }
}

export function* changeProfileUser(action) {
  const toast = createStandaloneToast()
  const params = new FormData()
  params.set('email', action.params.email)
  params.set('address', action.params.address)
  params.set('name', action.params.name)
  params.set('phone', action.params.phone)
  params.set('description', action.params.description)
  params.set('bussiness_entity', action.params.bussiness_entity)
  params.append('photo',action.file)

  const content = yield API.post(action.endpoint, params)
  if (content.status === 400) {
    yield put({
      type: actionTypes.CHANGE_PROFILE_FAIL,
    })
    toast({
      title: 'Ubah Profil Gagal',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `error`,
    })
  } else if (content.status === 200) {
    yield put({
      type: actionTypes.CHANGE_PROFILE_SUCCESS,
      auth: content.data.data,
    })
    toast({
      title: 'Ubah Profil Berhasil',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `success`,
    })
    router.push('/profil')
  } else {
    yield put({
      type: actionTypes.CHANGE_PROFILE_FAIL,
    })
    toast({
      title: 'Ubah Profil Gagal',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `error`,
    })
  }
}
