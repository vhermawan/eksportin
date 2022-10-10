import React from 'react'
import { Container, Grid, GridItem, Text, Box, Center } from '@chakra-ui/layout'
import { Button, Image, Heading, useColorMode } from '@chakra-ui/react'
import router from 'next/router'

const Section1 = (props) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        paddingTop={{ base: '20', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        pb="20"
        h="max-content"
      >
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(9, 1fr)"
          gap={4}
          h="min-content"
          w="full"
        >
          <GridItem
            rowSpan={3}
            colSpan={{ base: 9, lg: 5 }}
            mt={{ base: '10', '3xl': '10' }}
            h="max-content"
          >
            <Heading
              as="h1"
              letterSpacing={'-.0.01rem'}
              fontWeight="bold"
              fontSize={{
                base: '4xl',
                md: '6xl',
                xl: '6xl',
                '2xl': '6xl',
                '3xl': '85px',
              }}
              color={colorMode === 'light' ? '#10214B' : '#EE7C24'}
            >
              Belajar Eskpor Barang Secara Mudah
            </Heading>
            <Text
              my={{ base: '4', lg: '9' }}
              w={{ base: 'full', md: '96', '3xl': 'xl' }}
              color={colorMode === 'light' ? '#21383E' : 'white'}
              letterSpacing={'-.0.001rem'}
              lineHeight={'-.0.001rem'}
              fontSize={{ base: 'sm', md: 'sm', lg: 'md', '3xl': '2xl' }}
              textAlign="justify"
            >
              Pelajari cara melakukan ekspor agar barangmu mudah dikenal oleh
              warga mancanegara
            </Text>
            <Box display={props.dataUser ? 'none' : 'block'}>
              <Button
                bgColor={colorMode === 'light' ?  "#10214B" : "#EE7C24"}
                size="md"
                color="white"
                p={{ base: '4', md: '8', xl: '6', '3xl': '8' }}
                onClick={() => router.push('/login')}
                aria-label="login"
              >
                Mulai Sekarang
              </Button>
            </Box>
          </GridItem>
          <GridItem rowSpan={3} colSpan={{ base: 9, lg: 4 }} h="max-content">
            <Image
              boxSize="full"
              objectFit="cover"
              loading="lazy"
              src="/assets/img/logo-section1-beranda.png"
              alt="logo-landing"
            />
          </GridItem>
          <GridItem rowSpan={3} colSpan={9} h="max-content">
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(12, 1fr)"
              gap={4}
              h="min-content"
              w="full"
              mt="12"
            >
              <GridItem rowSpan={3} colSpan="3">
                <Center>
                  <Image
                    boxSize={{
                      base: '60px',
                      md: '90px',
                      lg: '120px',
                      '3xl': '170px',
                    }}
                    objectFit="contain"
                    src="/assets/img/logodjp.png"
                    loading="lazy"
                    alt="logo-landing"
                  />
                </Center>
              </GridItem>
              <GridItem rowSpan={3} colSpan="3">
                <Center>
                  <Image
                    boxSize={{
                      base: '60px',
                      md: '90px',
                      lg: '120px',
                      '3xl': '170px',
                    }}
                    objectFit="contain"
                    loading="lazy"
                    src="/assets/img/logougm.png"
                    alt="logo-landing"
                  />
                </Center>
              </GridItem>
              <GridItem rowSpan={3} colSpan="3">
                <Center>
                  <Image
                    boxSize={{
                      base: '60px',
                      md: '90px',
                      lg: '120px',
                      '3xl': '170px',
                    }}
                    objectFit="cover"
                    loading="lazy"
                    src="/assets/img/logokemenlu.png"
                    alt="logo-landing"
                  />
                </Center>
              </GridItem>
              <GridItem rowSpan={3} colSpan="3">
                <Center>
                  <Image
                    boxSize={{
                      base: '60px',
                      md: '90px',
                      lg: '120px',
                      '3xl': '170px',
                    }}
                    objectFit="contain"
                    loading="lazy"
                    src="/assets/img/logokemenkeu.png"
                    alt="logo-landing"
                  />
                </Center>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
export default Section1
