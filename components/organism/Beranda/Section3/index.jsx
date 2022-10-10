import React from 'react'
import {
  Container,
  VStack,
  Text,
  Spacer,
  Box,
  Heading,
} from '@chakra-ui/layout'
import { useColorMode, Image, Flex } from '@chakra-ui/react'

const Section3 = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        paddingInlineEnd="0"
        paddingInlineStart={{ base: '0', md: '16', lg: '0' }}
        paddingTop={{ base: '20', md: '28', lg: '10', '3xl': '16' }}
        pb="10"
        h="max-content"
      >
        <Flex w="full" wrap={{ base: 'wrap', md: 'nowrap' }}>
          <Box
            p={{ base: '0', lg: '32' }}
            w={{ base: 'max-content', md: '96', lg: 'full' }}
            mb={{ base: '10', lg: '0' }}
          >
            <Image
              boxSize={{ base: '90px', '3xl': '120px' }}
              objectFit="contain"
              src="/assets/img/ornamen.png"
              alt="personal-assitant"
              zIndex="1"
              ml="-12"
              loading="lazy"
            />
            <Text
              fontSize={{ base: 'xl', lg: '3xl', '3xl': '5xl' }}
              fontWeight="extrabold"
              pl={{ base: '4', md: '0' }}
              zIndex="99"
              mt="-10"
              w="max-content"
            >
              Kenapa Eksportin?
            </Text>
            <Text
              fontSize={{ base: 'sm', lg: 'md', '3xl': '2xl' }}
              w={{ base: '72', md: '56', lg: 'sm', '3xl': 'lg' }}
              textAlign={{ base: 'justify', md: 'left', lg: 'justify' }}
              pl={{ base: '4', md: '0' }}
            >
              Kami telah berpengalaman dalam pembelajar mengenai edukasi ekspor
              dengan menghadirkan praktisi terpercaya
            </Text>
            <Heading
              mt={{ base: '10', lg: '20' }}
              fontSize={{ base: '6xl', lg: '8xl', '3xl': '9xl' }}
              color="#10214B"
              pl={{ base: '4', md: '0' }}
              w="max-content"
            >
              100+
            </Heading>
            <Text
              fontSize={{ base: 'sm', lg: 'md', '3xl': '2xl' }}
              w={{ base: '80', md: '56', lg: 'sm', '3xl': 'lg' }}
              pl={{ base: '4', md: '0' }}
            >
              UMKM tergabung bersama Eksportin
            </Text>
            <Heading
              mt={{ base: '10', lg: '16' }}
              fontSize={{ base: '6xl', lg: '8xl', '3xl': '9xl' }}
              color="#10214B"
              pl={{ base: '4', md: '0' }}
              w="max-content"
            >
              135+
            </Heading>
            <Text
              fontSize={{ base: 'sm', lg: 'md', '3xl': '2xl' }}
              w={{ base: '80', md: '56', lg: 'sm', '3xl': 'lg' }}
              pl={{ base: '4', md: '0' }}
            >
              Materi yang bisa diakses
            </Text>
          </Box>
          <Spacer display={{ base: 'none', md: 'block' }} />
          <Box
            bg={colorMode === 'light' ? '#F6FAFA' : '#0F3032'}
            w="full"
            pb={{ base: '40', md: '10', lg: '0' }}
          >
            <VStack spacing={4} align="stretch" ml={{ base: '0', lg: '10' }}>
              <Box h="min-content">
                <Flex
                  wrap="wrap"
                  p={{ base: '4', lg: '6' }}
                  mt={{ base: '10', lg: '40' }}
                >
                  <Image
                    boxSize={{ base: '50px', '3xl': '90px' }}
                    objectFit="contain"
                    src="/assets/img/icon-calendar.png"
                    alt="personal-assitant"
                    ml={{ base: '4', lg: '0' }}
                  />
                  <Box ml="4">
                    <Text
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                      fontWeight="bold"
                      mt={{ base: '4', lg: '0' }}
                    >
                      Belajar Ekspor Mudah
                    </Text>
                    <Text
                      w={{ base: '72', lg: 'sm', '3xl': 'lg' }}
                      fontSize={{ '3xl': '22px' }}
                      mt="1"
                    >
                      Belajar ekspor dapat dilakukan secara mudah dengan adanya
                      praktisi terkait
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box h="min-content">
                <Flex
                  wrap="wrap"
                  p={{ base: '4', lg: '6' }}
                  mt={{ base: '10', '3xl': '28' }}
                >
                  <Image
                    boxSize={{ base: '50px', '3xl': '90px' }}
                    objectFit="contain"
                    src="/assets/img/icon-waktu.webp"
                    alt="icon-waktu"
                    ml={{ base: '4', lg: '0' }}
                    loading="lazy"
                  />
                  <Box ml="4">
                    <Text
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                      fontWeight="bold"
                      mt={{ base: '4', lg: '0' }}
                    >
                      Waktu yang Fleksibel
                    </Text>
                    <Text
                      w={{ base: '72', lg: 'sm', '3xl': 'lg' }}
                      fontSize={{ '3xl': '22px' }}
                      mt="1"
                    >
                      Proses belajar ekspor tidak memerlukan waktu yang lama
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box h="min-content">
                <Flex
                  wrap="wrap"
                  p={{ base: '4', lg: '6' }}
                  mt={{ base: '10', '3xl': '28' }}
                >
                  <Image
                    boxSize={{ base: '50px', '3xl': '90px' }}
                    objectFit="contain"
                    src="/assets/img/icon-informasi.webp"
                    alt="icon-informasi"
                    ml={{ base: '4', lg: '0' }}
                    loading="lazy"
                  />
                  <Box ml="4">
                    <Text
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                      fontWeight="bold"
                      mt={{ base: '4', lg: '0' }}
                    >
                      Informasi Terbaru
                    </Text>
                    <Text
                      w={{ base: '72', lg: 'sm', '3xl': 'lg' }}
                      fontSize={{ '3xl': '22px' }}
                      mt="1"
                    >
                      Mengetahui perkembangan ekspor secara langsung
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Section3
