import React from 'react'
import {
  Container,
  Box,
  Image,
  Center,
  Heading,
  useColorMode,
} from '@chakra-ui/react'

export default function DataNotFound() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        paddingTop={{ base: '10', lg: '10' }}
        px={{ base: '5', md: '10', lg: '40', xl: '20', '3xl': '24' }}
        h="max-content"
        centerContent
      >
        <Box w="full" mx="auto">
          <Center>
            <Image
              src={
                colorMode === 'light'
                  ? '/assets/img/datanotfound.png'
                  : '/assets/img/datanotfound-dm.png'
              }
              alt="data-not-found"
              loading="lazy"
            />
          </Center>
        </Box>
        <Box w="full" mx="auto">
          <Center>
            <Heading
              as="h1"
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              mt="4"
            >
              Tidak ada data yang ditemukan
            </Heading>
          </Center>
        </Box>
      </Container>
    </>
  )
}
