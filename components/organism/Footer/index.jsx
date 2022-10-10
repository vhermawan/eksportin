import React from 'react'
import {
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Text,
  Heading,
  Stack,
  HStack,
  useColorMode,
  Link,
} from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import router from 'next/router'

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Box
        // bg={
        //   colorMode === 'light'
        //     ? 'linear-gradient(white, #A0AEC0)'
        //     : 'linear-gradient(#1A202C, #2D3748)'
        // }
        mt="10"
        pb="4"
        bottom="0"
        position="relative"
        as="footer"
        textAlign="center"
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
      >
        <Grid
          h="full"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(16, 1fr)"
          gap={4}
          pt={10}
          mb={4}
        >
          <GridItem rowSpan={4} colSpan={{ base: 16, lg: 7 }}>
            <Flex mb={4}>
              <Image
                borderRadius="full"
                boxSize={{ base: '45px', '3xl': '60px' }}
                src={colorMode === 'light' ? "/assets/img/Logo.png" : "/assets/img/Logo-darkmode.png"}
                alt="logo-eksportin"
                loading="lazy"
                mr={4}
              />
            </Flex>
            <Flex w={{ base: 'full', lg: '80%' }}>
              <Text
                color={colorMode === 'light' ? '#1E2833' : 'FFFFFF'}
                textAlign="justify"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: 'sm',
                  md: 'md',
                  sm: 'md',
                  lg: 'md',
                  '3xl': '2xl',
                }}
              >
                Eksportin merupakan sebuah platform edukasi untuk belajar
                mengenai layanan eksportasi dan impor barang dan jasa yang
                bekerja sama dengan Departemen Ekonomika dan Bisnis Universitas
                Gadjah Mada untuk membangun platform edukasi
              </Text>
            </Flex>
          </GridItem>
          <GridItem rowSpan={4} colSpan={{ base: 16, lg: 3 }}>
            <Flex>
              <Heading
                as="h1"
                color={colorMode === 'light' ? "#10214B" : "#EE7C24"}
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: 'sm',
                  md: 'md',
                  sm: '2xl',
                  lg: '2xl',
                  '3xl': '4xl',
                }}
              >
                Layanan
              </Heading>
            </Flex>
            <Flex>
              <Stack
                spacing={2}
                mt={4}
                fontSize={{ base: 'sm', md: 'md', '3xl': 'xl' }}
              >
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/panduan-ekspor')}
                >
                  Panduan Ekspor
                </Link>
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/umkm')}
                >
                  UMKM
                </Link>
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/pembeli')}
                >
                  Pembeli
                </Link>
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/instansi')}
                >
                  Instansi
                </Link>
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/berita')}
                >
                  Berita
                </Link>
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/materi')}
                >
                  Materi
                </Link>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem rowSpan={4} colSpan={{ base: 16, lg: 3 }}>
            <Flex>
              <Heading
                as="h1"
                color={colorMode === 'light' ? "#10214B" : "#EE7C24"}
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: 'sm',
                  md: 'md',
                  sm: '2xl',
                  lg: '2xl',
                  '3xl': '4xl',
                }}
              >
                Tentang
              </Heading>
            </Flex>
            <Flex>
              <Stack
                spacing={2}
                mt={4}
                fontSize={{ base: 'sm', md: 'md', '3xl': 'xl' }}
              >
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/tim')}
                >
                  Tim
                </Link>
                <Link
                  textAlign="left"
                  hover="none"
                  onClick={() => router.push('/cerita')}
                >
                  Berita
                </Link>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem rowSpan={4} colSpan={{ base: 16, lg: 3 }}>
            <Flex>
              <Heading
                as="h1"
                color={colorMode === 'light' ? "#10214B" : "#EE7C24"}
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: 'sm',
                  md: 'md',
                  sm: '2xl',
                  lg: '2xl',
                  '3xl': '4xl',
                }}
              >
                Follow Us
              </Heading>
            </Flex>
            <Flex>
              <Stack
                spacing={2}
                mt={4}
                fontSize={{ base: 'sm', md: 'md', '3xl': 'xl' }}
              >
                <Text textAlign="left">
                  <HStack spacing="4">
                    <FaFacebook />
                    <Link
                      textAlign="left"
                      hover="none"
                      onClick={() => router.push('/tim')}
                    >
                      Facebook
                    </Link>
                  </HStack>
                </Text>
                <Text textAlign="left">
                  <HStack spacing="4">
                    <FaTwitter />
                    <Link
                      textAlign="left"
                      hover="none"
                      onClick={() => router.push('/tim')}
                    >
                      Twitter
                    </Link>
                  </HStack>
                </Text>
                <Text textAlign="left">
                  <HStack spacing="4">
                    <FaInstagram />
                    <Link
                      textAlign="left"
                      hover="none"
                      onClick={() => router.push('/tim')}
                    >
                      Instagram
                    </Link>
                  </HStack>
                </Text>
              </Stack>
            </Flex>
          </GridItem>
        </Grid>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
          pt={{ base: 4, '3xl': '8' }}
        >
          <GridItem rowSpan={2} colSpan={{ base: 16, lg: 8 }}>
            <Text
              color={colorMode === 'light' ? '#979797' : 'FFFFFF'}
              textAlign="justify"
              letterSpacing={'-.0.01rem'}
              fontSize={{
                base: 'sm',
                md: 'md',
                sm: 'sm',
                lg: 'sm',
                '3xl': 'xl',
              }}
            >
              Copyright © 2021. Eksportin. All rights reserved.
            </Text>
          </GridItem>
          <GridItem rowSpan={2} colSpan={{ base: 16, lg: 2 }}>
            <Link
              color={colorMode === 'light' ? '#1E2833' : 'FFFFFF'}
              textAlign={{ base: 'left', lg: 'right' }}
              letterSpacing={'-.0.01rem'}
              fontSize={{
                base: 'sm',
                md: 'md',
                sm: 'sm',
                lg: 'sm',
                '3xl': 'xl',
              }}
              onClick={() => router.push('/syarat-ketentuan')}
            >
              Syarat & Ketentuan
            </Link>
          </GridItem>
          <GridItem rowSpan={2} colSpan={{ base: 16, lg: 2 }}>
            <Link
              color={colorMode === 'light' ? '#1E2833' : 'FFFFFF'}
              textAlign={{ base: 'left', lg: 'right' }}
              letterSpacing={'-.0.01rem'}
              fontSize={{
                base: 'sm',
                md: 'md',
                sm: 'sm',
                lg: 'sm',
                '3xl': 'xl',
              }}
              onClick={() => router.push('/kebijakan-privasi')}
            >
              Kebijakan Privasi
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default Footer
