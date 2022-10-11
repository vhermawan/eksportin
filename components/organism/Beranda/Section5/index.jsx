import React from 'react'
import { Container, Text, Box } from '@chakra-ui/layout'
import { Image, Flex, HStack, Button, useColorMode } from '@chakra-ui/react'
import router from 'next/router'

const Section5 = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        paddingTop={{ base: '20', md: '28', lg: '10' }}
        px={{ base: '0', md: '0', lg: '40', xl: '20', '3xl': '24' }}
        pb="20"
        h="max-content"
      >
        <Flex
          w="full"
          wrap={{ base: 'wrap', md: 'nowrap' }}
          gridGap="10"
          mt={{ base: '4', lg: '10' }}
          bg={colorMode === 'light' ?  "#10214B" : "blue.200"}
        >
          <Box zIndex="91" mt="-20" w="full">
            <Image
              boxSize={{ base: '350px', '3xl': '500px' }}
              objectFit="contain"
              src="/assets/img/section-5-picture.png"
              alt="section-5-picture"
              bottom="0"
              loading="lazy"
            />
          </Box>
          <Box
            pt={{ base: '0', md: '12', lg: '12', '3xl': '16' }}
            px={{ base: '12', '3xl': '10' }}
            w="full"
            pb={{ base: '10', lg: '0' }}
          >
            <Text
              fontWeight="bold"
              textAlign="left"
              fontSize={{ base: '2xl', lg: '4xl', '3xl': '6xl' }}
              color="white"
            >
              {' '}
              Siap Memulai Belajar Ekspor Pertamamu ?
            </Text>
            <HStack spacing="24px" mt="4">
              <Button
                bgColor="white"
                size="md"
                color="#10214B"
                p={{ base: '4', md: '8' }}
                _hover={{
                  bgColor:"#10214B",
                  color:"white"
                }}
                fontSize="smaller"
                onClick={() => router.push('/login')}
                aria-label="mulai-sekarang"
              >
                Mulai Sekarang
              </Button>
              <Button
                bgColor="transparent"
                size="md"
                variant="outline"
                border="2px"
                color="white"
                p={{ base: '4', md: '8' }}
                _hover={{
                  color:"#10214B",
                  bg:"white"
                }}
                fontSize="smaller"
                aria-label="hubungi-kami"
              >
                Hubungi Kami
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Section5
