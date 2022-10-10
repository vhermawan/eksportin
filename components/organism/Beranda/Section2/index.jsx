import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { Container, Grid, GridItem, Text, Center } from '@chakra-ui/layout'
import { Button, Image, Flex, useColorMode } from '@chakra-ui/react'
import router from 'next/router'

const Section2 = () => {
  const [token] = useState(Cookies.get('token'))
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        centerContent
        paddingTop={{ base: '2', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20' }}
        h="max-content"
      >
        <Flex
          wrap="wrap"
          alignContent="center"
          w={{ base: '80', md: 'md', '3xl': 'xl' }}
        >
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl', '3xl': '4xl' }}
          >
            Belajar Eskpor Darimana dan Kapan Saja
          </Text>
        </Flex>
        <Flex
          alignContent="center"
          w={{ base: '80', md: '2xl', '3xl': '4xl' }}
          mt="4"
        >
          <Text
            textAlign="center"
            fontSize={{ sm: 'smaller', md: 'md', lg: 'lg', '3xl': '2xl' }}
          >
            Sekarang anda dapat belajar mengenai cara ekspor mudah untuk
            melakukan ekspor barang tanpa harus memakan banyak waktu.
          </Text>
        </Flex>
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(9, 1fr)"
          gap={4}
          h="min-content"
          w="full"
        >
          <GridItem
            rowSpan={3}
            colSpan={{ base: 9, lg: 3 }}
            mt="10"
            textAlign="center"
          >
            <Center>
              <Image
                boxSize={{ base: '150px', '3xl': '200px' }}
                objectFit="contain"
                src="/assets/img/personal-assistant.png"
                alt="personal-assitant"
                loading="lazy"
              />
            </Center>
            <Text
              mt="4"
              fontWeight="700"
              fontSize={{ base: 'xl', '3xl': '2xl' }}
            >
              Personal Assistant Admin
            </Text>
            <Text mt="1" fontSize={{ base: 'sm', '3xl': 'xl' }}>
              Akan ada admin yang akan secara
            </Text>
            <Text mt="1" fontSize={{ base: 'sm', '3xl': 'xl' }}>
              responsif menjawab pertanyaanmu
            </Text>
            <Center>
              <Button
                mt="2"
                bg="transparent"
                color={colorMode === 'light' ? "#10214B" : "#EE7C24"}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
                onClick={() => router.push('/login')}
                display={!token ? 'block' : 'none'}
                aria-label="button-section-2"
              >
                Pelajari Fitur Selengkapnya
              </Button>
            </Center>
          </GridItem>
          <GridItem
            rowSpan={3}
            colSpan={{ base: 9, lg: 3 }}
            mt="10"
            textAlign="center"
          >
            <Center>
              <Image
                boxSize={{ base: '150px', '3xl': '200px' }}
                objectFit="contain"
                src="/assets/img/stakeholder-section2.png"
                alt="personal-assitant"
                loading="lazy"
              />
            </Center>
            <Text
              mt="4"
              fontWeight="700"
              fontSize={{ base: 'xl', '3xl': '2xl' }}
            >
              Terhubung dengan Stakeholder
            </Text>
            <Text mt="1" fontSize={{ base: 'sm', '3xl': 'xl' }}>
              Eksportin akan menghubungkan
            </Text>
            <Text mt="1" fontSize={{ base: 'sm', '3xl': 'xl' }}>
              kamu dengan stakeholder terkait
            </Text>
            <Center>
              <Button
                mt="2"
                bg="transparent"
                color={colorMode === 'light' ? "#10214B" : "#EE7C24"}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
                onClick={() => router.push('/login')}
                display={!token ? 'block' : 'none'}
                aria-label="pelajari-fitur"
              >
                Pelajari Fitur Selengkapnya
              </Button>
            </Center>
          </GridItem>
          <GridItem
            rowSpan={3}
            colSpan={{ base: 9, lg: 3 }}
            mt="10"
            textAlign="center"
          >
            <Center>
              <Image
                boxSize={{ base: '150px', '3xl': '200px' }}
                objectFit="contain"
                src="/assets/img/self-assestment.png"
                alt="personal-assitant"
                loading="lazy"
              />
            </Center>
            <Text
              mt="4"
              fontWeight="700"
              fontSize={{ base: 'xl', '3xl': '2xl' }}
            >
              Materi Ekspor
            </Text>
            <Text mt="1" fontSize={{ base: 'sm', '3xl': 'xl' }}>
              Kamu akan belajar cara ekspor
            </Text>
            <Text mt="1" fontSize={{ base: 'sm', '3xl': 'xl' }}>
              langsung dari ahlinya
            </Text>
            <Center>
              <Button
                mt="2"
                bg="transparent"
                color={colorMode === 'light' ? "#10214B" : "#EE7C24"}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
                onClick={() => router.push('/login')}
                display={!token ? 'block' : 'none'}
                aria-label="pelajari-fitur"
              >
                Pelajari Fitur Selengkapnya
              </Button>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
export default Section2
