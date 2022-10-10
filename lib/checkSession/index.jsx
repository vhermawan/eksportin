/* eslint-disable no-undef */
import Cookies from 'js-cookie'

export function checkSessionTimes() {
  const currentDateTime = new Date()
  const currentTimestamp = Math.floor(currentDateTime.getTime() / 1000)
  if (Cookies.get('loginTimes') != null) {
    const loginTimes = JSON.parse(
      Buffer.from(Cookies.get('loginTimes'), 'base64').toString(),
    )
    if (currentTimestamp >= loginTimes.expirationTime) return true
    else return false
  }
}

export function checkModalTimes() {
  const currentDateTime = new Date()
  const currentTimestamp = Math.floor(currentDateTime.getTime() / 1000)
  if (Cookies.get('modalTimes') != null) {
    const modalTimes = JSON.parse(
      Buffer.from(Cookies.get('modalTimes'), 'base64').toString(),
    )
    if (currentTimestamp >= modalTimes.expirationTime) return true
    else return false
  }
}

