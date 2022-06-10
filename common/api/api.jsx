import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL, FLASK_URL } from '../init'

export const API = {
  get: function (endpoint, input) {
    let headers = {
      Authorization: '',
    }

    let token = Cookies.get('token')

    if (token !== null) headers.Authorization = `Bearer ${token}`

    let config = {
      headers: headers,
      params: input,
    }

    return axios
      .get(BASE_URL + endpoint, config)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },

  post: function (endpoint, input) {
    let headers = {
      Authorization: '',
      'Content-Type': 'application/json',
    }

    let token = Cookies.get('token')

    if (token !== null) headers.Authorization = `Bearer ${token}`

    return axios
      .post(BASE_URL + endpoint, input, { headers: headers })
      .then((response) => {
        return response
      })
      .catch((error) => {
        // console.log('err', error.response)
        return error.response
      })
  },

  delete: function (endpoint, input) {
    let headers = {
      Authorization: '',
      'Content-Type': 'application/json',
    }

    let token = Cookies.get('token')

    if (token !== null) headers.Authorization = `Bearer ${token}`

    let config = {
      headers: headers,
      params: input,
    }

    return axios
      .delete(BASE_URL + endpoint, config)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },

  sendMessage: function (endpoint, input) {
    let headers = {
      'Content-Type': 'application/json',
    }

    console.log('flask url', FLASK_URL)

    return axios
      .post(FLASK_URL + endpoint, input, { headers: headers })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },
}
