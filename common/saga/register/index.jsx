import { put } from 'redux-saga/effects'

import * as actionTypes from '../../reducer/register/actionTypes'
import { API } from '../../api/api'

import { createStandaloneToast } from '@chakra-ui/react'
import router from 'next/router'

export function* registerUser(action) {
  const {toast} = createStandaloneToast()
  const params = new FormData()
  params.set('name', action.params.name)
  params.set('email', action.params.email)
  params.set('password', action.params.password)
  params.set('password_confirmation', action.params.password)
  let isUpdated = false
  const content = yield API.post(action.endpoint, params)
  if (content.status === 400) {
    yield put({
      type: actionTypes.REGISTER_FAIL,
      auth: content.data,
    })
  } else if (content.status === 201) {
    yield put({
      type: actionTypes.REGISTER_SUCCESS,
    })
    toast({
      title: 'Register Berhasil Silahkan Cek Email Untuk Melakukan Aktivasi!',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `success`,
      containerStyle: {
        zIndex: 999999,
      },
    })
    isUpdated=true
  } else if (content.status === 422) {
    if (content.data.errors.email) {
      yield put({
        type: actionTypes.REGISTER_FAIL,
      })
      toast({
        title: 'Email Telah Digunakan!',
        position: `top-right`,
        isClosable: true,
        variant: `left-accent`,
        status: `error`,
      })
    }
  }

  setTimeout(() => {
    if(isUpdated){
      isUpdated=false;
      router.push('/')
    }
  }, 1800);
}
