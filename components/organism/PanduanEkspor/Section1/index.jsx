import React from 'react'
import { Container, Text } from '@chakra-ui/layout'
import { Image, Flex, Heading, useColorMode } from '@chakra-ui/react'

const Section1 = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container
        maxW="full"
        centerContent
        paddingTop={{ base: '20', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        h="max-content"
      >
        <Flex
          alignContent="center"
          wrap="wrap"
          textAlign="center"
          w={{ base: 'full', lg: 'container.sm', '3xl': 'container.md' }}
          flexDirection="column"
        >
          <Heading
            as="h1"
            letterSpacing={'-.0.01rem'}
            fontSize={{
              base: '3xl',
              md: '6xl',
              lg: '7xl',
              xl: '5xl',
              '3xl': '6xl',
            }}
          >
            Memahami Tahapan Proses Ekspor Barang
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
            my={{ base: '6', '3xl': '12' }}
            w={{ base: 'full', md: '96', '3xl': 'container.sm' }}
            color={colorMode === 'light' ? '#21383E' : 'white'}
            letterSpacing={'-.0.001rem'}
            lineHeight={'-.0.001rem'}
            fontSize={{ base: 'sm', md: 'sm', lg: 'md', '3xl': '2xl' }}
          >
            Belajar bagaimana proses ekspor barang di Indonesia dan mengerti
            tahapan secara keseluruhan.
          </Text>
        </Flex>
      </Container>
      <Container
        maxW="full"
        centerContent
        pb={{ base: '4', lg: '20' }}
        h="max-content"
        paddingInline="0"
      >
        <Flex
          alignContent="center"
          wrap="wrap"
          textAlign="center"
          w="full"
          flexDirection="column"
          mt="4"
        >
          <Image
            boxSize="full"
            objectFit="cover"
            src="/assets/img/panduan-section1.png"
            alt="logo-landing"
            loading="lazy"
          />
        </Flex>
      </Container>
    </>
  )
}
export default Section1
