import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { bindActionCreators } from 'redux'
import { Box, createStandaloneToast, useDisclosure } from '@chakra-ui/react'
import { checkSessionTimes } from '@/lib/checkSession/index'
import router from 'next/router'
import ChatBot from '@/components/atoms/ChatBox'
import { getCategoryUmkms } from '@/common/reducer/master/action'
import ModalBegining from '@/components/atoms/ModalCourse'

const Header = dynamic(() => import('@/components/organism/Header/index.jsx'))
const Footer = dynamic(() => import('@/components/organism/Footer/index.jsx'))

const Layout = (props) => {
  const toast = createStandaloneToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [result, setResult] = useState(false)
  const [dataUser] = useState(props.auth)

  useEffect(() => {
    if (dataUser !== null) {
      const isNullish = Object.values(dataUser.umkm).every((value) => {
        if (value === null) {
          return true
        }
        return false
      })
      setResult(isNullish)
    }
  }, [dataUser])

  useEffect(() => {
    if (checkSessionTimes()) {
      Cookies.remove('token', { path: '/', domain: 'localhost' })
      Cookies.remove('loginTimes', { path: '/', domain: 'localhost' })
      localStorage.removeItem('checkModal')
      router.push('/')
    }
  }, [checkSessionTimes()])

  useEffect(() => {
    props.getCategoryUmkms('/category-umkms')
  }, [])

  useEffect(() => {
    let checkModal = localStorage.getItem('checkModal')
    if(checkModal === null) {
      let time = setTimeout(() => onOpen(), 2 * 1000)
      return () => {
        clearTimeout(time)
      }
    }
  })

  useEffect(() => {
    if (result) {
      toast({
        title:
          'Data Profil Anda Belum Lengkap, Silahkan lengkapi di menu profil',
        position: `top-right`,
        isClosable: true,
        variant: `left-accent`,
        status: `error`,
      })
    }
  }, [result])

  const closeModal = () => {
    onClose()
    localStorage.setItem('checkModal',true)
  }

  return (
    <>
      <Header datauser={dataUser} />
      <Box minH="100vh">{props.children}</Box>
      <ChatBot datauser={dataUser} />
      <ModalBegining isOpen={isOpen} onClose={closeModal} onOpen={onOpen} />
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth.auth,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryUmkms: bindActionCreators(getCategoryUmkms, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
