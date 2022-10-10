import dynamic from 'next/dynamic'
import { API } from '@/common/api/api'
import React, { useState, useEffect } from 'react'
import { Container, Box, Heading, Flex, Skeleton } from '@chakra-ui/react'

const CardNewsLastest = dynamic(() =>
  import('@/components/atoms/CardNewsLastest/index'),
)

const Section2 = (props) => {
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    API.get(`/lasted-news`)
      .then((res) => {
        setData(res.data.data.news)
        setLoaded(true)
      })
      .catch((error) => {
        console.log('err', error)
        setLoaded(true)
      })
  }, [])

  return (
    <>
      <Container
        maxW="full"
        px={{ base: '5', md: '16', lg: '40', xl: '20' }}
        pb="20"
        h="max-content"
      >
        <Box
          bg="#10214B"
          borderRadius="12"
          px={{ base: '5', md: '12' }}
          pb="10"
        >
          <Heading
            as="h1"
            fontSize={{ base: 'xl', '3xl': '3xl' }}
            fontWeight="bold"
            color="#fff"
            pt="10"
          >
            Berita Terbaru
          </Heading>
          <Flex
            wrap={{ base: 'wrap', md: 'nowrap' }}
            justifyContent="space-between"
            pt="4"
            w="full"
            gridGap={'4'}
          >
            {data
              ? data.map((item, index) => {
                  return (
                    <>
                      <Skeleton isLoaded={loaded}>
                        <Box maxW="full" key={index}>
                          <CardNewsLastest
                            key={index}
                            data={item}
                            setSlugNews={props.setSlugNews}
                          />
                        </Box>
                      </Skeleton>
                    </>
                  )
                })
              : null}
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export default Section2
