import React from 'react'
import { Container, Text, Box } from '@chakra-ui/layout'
import { Image, Avatar, Flex, Spacer, WrapItem } from '@chakra-ui/react'

const Section4 = () => {
  return (
    <>
      <Container
        maxW="full"
        paddingTop={{ base: '20', md: '28', lg: '10' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        pb="20"
        h="max-content"
      >
        <Flex>
          <Image
            boxSize={{ base: '60px', lg: '90px' }}
            objectFit="contain"
            src="/assets/img/quote.png"
            alt="quote"
            zIndex="1"
            loading="lazy"
          />
        </Flex>
        <Flex mt="2">
          <Text
            fontWeight="bold"
            fontSize={{ base: '3xl', lg: '4xl', '3xl': '5xl' }}
            w={{ base: 'md', '3xl': 'xl' }}
          >
            Apa kata mereka tentang Eksportin ?
          </Text>
        </Flex>
        <Flex
          w="full"
          wrap={{ base: 'wrap', md: 'nowrap' }}
          gridGap={{ base: '4', md: '10', '3xl': '16' }}
          mt={{ base: '4', lg: '10' }}
        >
          <Box>
            <Text fontSize={{ base: 'sm', lg: 'lg', '3xl': '3xl' }}>
              Dieksportin saya belajar bagaimana proses untuk mengerti cara
              ekspor dengan baik dan benar serta mengerti untuk proses mengatur
              dagangan dengan benar.
            </Text>
            <Flex w="full" wrap={{ base: 'nowrap', lg: 'wrap' }} mt="8">
              <ol>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    size="xl"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </ol>
              <Box ml="8">
                <Text
                  fontSize={{ base: 'sm', lg: 'lg', '3xl': '2xl' }}
                  fontWeight="bold"
                  mb="2"
                >
                  Pak Sunaryo
                </Text>
                <Text fontSize={{ base: 'sm', lg: 'md', '3xl': 'xl' }}>
                  Pedagang Kerajinan Tangan
                </Text>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize={{ base: 'sm', lg: 'lg', '3xl': '3xl' }}>
              Belajar ekspor di eksportin sangat menyenangkan karena materinya
              semua gratis, serta dapat diakses darimana saja dan kapan saja
            </Text>
            <Flex w="full" wrap={{ base: 'nowrap', lg: 'wrap' }} mt="8">
              <ol>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    size="xl"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </ol>
              <Box ml="8">
                <Text
                  fontSize={{ base: 'sm', lg: 'lg', '3xl': '2xl' }}
                  fontWeight="bold"
                  mb="2"
                >
                  Bu Inayah
                </Text>
                <Text fontSize={{ base: 'sm', lg: 'md', '3xl': 'xl' }}>
                  Pedangan Kain Batik
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Section4
