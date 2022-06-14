import React, { useState } from 'react'
import { Container, Text } from '@chakra-ui/layout'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import router from 'next/router'
import Cookies from 'js-cookie'

const Section1 = () => {
  const [token] = useState(Cookies.get('token'))
  return (
    <>
      <Container
        maxW="full"
        bgImage="/assets/img/header-umkm.webp"
        centerContent
        paddingTop={{ base: '20', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        h="max-content"
      >
        <Flex
          alignContent="center"
          wrap="wrap"
          py={{ base: '16', '3xl': '12' }}
          textAlign="center"
          w={{ base: 'full', lg: 'container.sm', '3xl': 'container.md' }}
          flexDirection="column"
        >
          <Heading
            as="h1"
            letterSpacing={'-.0.01rem'}
            color="white"
            fontSize={{
              base: '3xl',
              md: '6xl',
              lg: '7xl',
              xl: '5xl',
              '3xl': '7xl',
            }}
          >
            UMKM Eksportin
          </Heading>
          <Text
            my="3"
            mx="auto"
            w={{ base: 'full', md: 'md', '3xl': 'lg' }}
            color="white"
            letterSpacing={'-.0.001rem'}
            lineHeight={'-.0.001rem'}
            fontSize={{ base: 'sm', '3xl': 'lg' }}
          >
            Sudah lebih dari 100 UMKM terdaftar bersama Eksportin untuk belajar
            mengenai ekspor.
          </Text>
          <Box>
            <Button
              bgColor="#4FD1C5"
              size="xs"
              color="white"
              p={{ base: '4', md: '6', '3xl': '8' }}
              fontSize={{ base: 'sm', '3xl': 'xl' }}
              aria-label="mulai-belajar"
              onClick={
                token
                  ? () => router.push('/materi')
                  : () => router.push('/register')
              }
            >
              {token ? 'Mulai belajar materi' : 'Daftar Sekarang'}
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Section1
