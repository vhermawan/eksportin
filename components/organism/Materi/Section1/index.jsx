import React from 'react'
import { Container, Text } from '@chakra-ui/layout'
import { Flex, Heading, useColorMode } from '@chakra-ui/react'

const Section1 = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        centerContent
        paddingTop={{ base: '20', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20' }}
        h="max-content"
      >
        <Flex
          alignContent="center"
          wrap="wrap"
          textAlign="center"
          w={{ base: 'full', lg: 'container.lg' }}
          flexDirection="column"
        >
          <Heading
            as="h1"
            letterSpacing={'-.0.01rem'}
            fontSize={{ base: '3xl', md: '6xl', lg: '7xl', xl: '5xl' }}
          >
            Pilih Materi Eskpor Kamu
          </Heading>
        </Flex>
        <Flex
          alignContent="center"
          wrap="wrap"
          textAlign="center"
          w={{ base: 'full', lg: 'container.sm' }}
          flexDirection="column"
        >
          <Text
            my="3"
            color={colorMode === 'light' ? "#21383E" : "blue.200"}
            letterSpacing={'-.0.001rem'}
            lineHeight={'-.0.001rem'}
            fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
          >
            Cari materi yang ingin kamu pelajari sesuai dengan kategori yang ada
          </Text>
        </Flex>
      </Container>
    </>
  )
}
export default Section1
