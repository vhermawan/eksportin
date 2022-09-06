import React, { useState, useEffect } from 'react'
import ChatBot from 'react-simple-chatbot'
import { useIdleTimer } from 'react-idle-timer'
import Cookies from 'js-cookie'
import { ThemeProvider } from 'styled-components'
import { API } from '@/common/api/api'

function makeIdSession(length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function SimpleForm(props) {
  const timeout = 1000 * 2
  const [opened, setOpened] = useState(false)
  const [timeLeft, setTimeLeft] = useState(null)
  const [sessionId, setSessionId] = useState(makeIdSession(5))
  const [token] = useState(Cookies.get('token'))

  const toggleFloating = ({ opened }) => {
    setOpened(opened)
  }

  const handleOnActive = () => {
    console.log('User is active')
  }

  const handleOnIdle = () => {
    handlePause()
    setTimeLeft(15)
  }

  const { reset, pause } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
    crossTab: {
      emitOnAllTabs: true,
    },
  })

  const handleReset = () => reset()
  const handlePause = () => pause()

  useEffect(() => {
    if (timeLeft === 0) {
      setSessionId(makeIdSession(5))
      setTimeLeft(null)
    }
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft])

  const sendMessage = (event, step) => {
    handleReset()

    let question = event.steps[step].metadata.q
    let answer = event.steps[step].value
    let name

    if (!token) {
      name = 'guest'
    } else {
      name = props.datauser.user.name
    }

    let params = {
      question,
      answer,
      name,
      sessionId,
    }

    API.sendMessage(`/answer`, params)
      .then((res) => {
        console.log('res', res)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#1EA59A',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#1EA59A',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Eskportin Bot"
          steps={[
            {
              id: '1',
              message:
                'Selamat datang di eskportin, ada yang bisa dibantu, terkait layanan kami?',
              trigger: '2',
            },
            {
              id: '2',
              options: [
                {
                  value: 'materi',
                  label: 'Materi',
                  metadata: {
                    q: 'Selamat datang di eskportin, ada yang bisa dibantu, terkait layanan kami?',
                  },
                  trigger: (input) => {
                    sendMessage(input, 2)
                    return 'materi_answer'
                  },
                },
                {
                  value: 'berita',
                  label: 'Berita',
                  metadata: {
                    q: 'Selamat datang di eskportin, ada yang bisa dibantu, terkait layanan kami?',
                  },
                  trigger: (input) => {
                    sendMessage(input, 2)
                    return 'berita_answer'
                  },
                },
                {
                  value: 'umkm',
                  label: 'Umkm',
                  metadata: {
                    q: 'Selamat datang di eskportin, ada yang bisa dibantu, terkait layanan kami?',
                  },
                  trigger: (input) => {
                    sendMessage(input, 2)
                    return 'umkm_answer'
                  },
                },
                {
                  value: 'pembeli',
                  label: 'Pembeli',
                  metadata: {
                    q: 'Selamat datang di eskportin, ada yang bisa dibantu, terkait layanan kami?',
                  },
                  trigger: (input) => {
                    sendMessage(input, 2)
                    return 'pembeli_answer'
                  },
                },
                {
                  value: 'instansi',
                  label: 'Instansi',
                  metadata: {
                    q: 'Selamat datang di eskportin, ada yang bisa dibantu, terkait layanan kami?',
                  },
                  trigger: (input) => {
                    if (timeLeft === null) {
                      return '7'
                    } else {
                      sendMessage(input)
                      return 'instansi-answer'
                    }
                  },
                },
              ],
            },
            {
              id: 'berita_answer',
              message:
                'Berita merupakan layanan yang diujukan untuk menjembantani informasi terbaru terkait eskpor',
              trigger: 'ask_again',
            },
            {
              id: 'umkm_answer',
              message:
                'Umkm merupakan layanan yang menampilkan daftar umkm yang telah terdaftar bersama eksportin',
              trigger: 'ask_again',
            },
            {
              id: 'ask_again',
              message: 'Apakah ada yang ingin ditanyakan kembali?',
              trigger: 'choice',
            },
            {
              id: 'choice',
              options: [
                {
                  value: 'ya',
                  label: 'Ya',
                  metadata: { q: 'Apakah ada yang ingin ditanyakan kembali?' },
                  trigger: (input) => {
                    sendMessage(input, 'choice')
                    return '2'
                  },
                },
                {
                  value: 'tidak',
                  label: 'Tidak',
                  metadata: { q: 'Apakah ada yang ingin ditanyakan kembali?' },
                  trigger: (input) => {
                    sendMessage(input, 'choice')
                    return 'end_message'
                  },
                },
              ],
            },
            {
              id: 'end_message',
              message:
                'Terimakasih atas pertanyaannnya, silahkan kembali lagi jika ingin ada pertanyaan kembali',
              end: true,
            },
          ]}
          toggleFloating={toggleFloating}
          floating={true}
          opened={opened}
          href="#"
          botAvatar={'/assets/avatars/avatar4.png'}
          userAvatar={
            props.datauser !== null
              ? props.datauser.umkm.image_URL
              : '/assets/avatars/avatar4.png'
          }
        />
      </ThemeProvider>
    </>
  )
}

export default SimpleForm
