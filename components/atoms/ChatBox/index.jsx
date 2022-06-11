import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
// import Cookies from 'js-cookie'
import { ThemeProvider } from 'styled-components'
// import { API } from '@/common/api/api'

function SimpleForm() {
  const [opened, setOpened] = useState(false)
  // const [token] = useState(Cookies.get('token'))
  const [lastHitTime, setLastHitTime] = useState(null)

  const toggleFloating = ({ opened }) => {
    setOpened(opened)
  }
  

  const sendMessage = () => {
    // let question = event.steps.name.metadata.q
    // let answer = event.steps.name.value
    // let name
    // if (!token) {
    //   name = 'guest'
    // } else {
    //   name = props.datauser.user.name
    // }
    // let params = {
    //   question,
    //   answer,
    //   name,
    // }
    

    const timeNow = new Date().getSeconds()

    if (timeNow - lastHitTime > 5 || lastHitTime === null) {
      console.log('generate id awal',timeNow,lastHitTime)
    }else{
      console.log('pakai id terakhir',timeNow,lastHitTime)
    }
    // generateSessionId(lastHitTime)

    
    // API.sendMessage(`/answer`, params)
    //   .then((res) => {
    //     console.log('res', res)
    //   })
    //   .catch((error) => {
    //     console.log('err', error)
    //   })
  }

  const hitMessage = () => {
    setLastHitTime(new Date().getSeconds())
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
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              metadata: { q: 'What is your name?' },
              user: true,
              trigger: (input) => {
                sendMessage(input)
                return '5'
              },
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: (input) => {
                sendMessage(input)
                return '7'
              },
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number'
                } else if (value < 0) {
                  return 'value must be positive'
                } else if (value > 120) {
                  return `${value}? Come on!`
                }

                return true
              },
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'end-message',
            },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
          ]}
          toggleFloating={toggleFloating}
          floating={true}
          opened={opened}
          // userAvatar={props.datauser.umkm.image_URL ? props.datauser.umkm.image_URL : "/assets/avatars/avatar4.png"}
        />
      </ThemeProvider>
    </>
  )
}

export default SimpleForm
