import React from 'react'
import { Container, Text } from '@chakra-ui/layout'
import {
  Box,
  InputGroup,
  Flex,
  Heading,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { API } from '@/common/api/api'

const Section1 = (props) => {
  let filterTimeout

  const doBuyerFilter = (query) => {
    clearTimeout(filterTimeout)
    if (!query) {
      props.setIsFilter(false)
    } else {
      filterTimeout = setTimeout(() => {
        console.log('====>', query)
        props.setIsFilter(true)
        let formData = new FormData()
        formData.append('name', query)
        API.post(`/search-buyer/${props.paramCategory}`, formData)
          .then((res) => {
            props.setBuyers(res.data.data.buyer)
          })
          .catch((error) => {
            console.log('err', error)
          })
      }, 500)
    }
  }

  return (
    <>
      <Container
        maxW="full"
        bgImage="/assets/img/pembeli-section1.webp"
        bgSize="cover"
        bgRepeat="no-repeat"
        centerContent
        paddingTop={{ base: '16', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20' }}
        h={{ base: 'max-content', lg: '450px', '3xl': '500px' }}
      >
        <Flex
          alignContent="center"
          wrap="wrap"
          p={{ base: '10', md: '10' }}
          justifyContent="center"
          textAlign="center"
          w={{ base: 'full', lg: 'container.sm', '3xl': 'container.lg' }}
          flexDirection="column"
        >
          <Heading
            as="h1"
            letterSpacing={'-.0.01rem'}
            color="white"
            fontSize={{
              base: '3xl',
              md: '3xl',
              lg: '7xl',
              xl: '5xl',
              '3xl': '6xl',
            }}
          >
            Temukan Pembeli Untuk Barang Anda
          </Heading>
          <Text
            my={{ base: '3', '3xl': '5' }}
            color="#FFFFFF"
            letterSpacing={'-.0.001rem'}
            lineHeight={'-.0.001rem'}
            fontSize={{ base: 'sm', '3xl': 'xl' }}
          >
            Cari Pembeli yang sesuai dengan barang yang anda pasarkan
          </Text>
          <Box
            marginX="auto"
            w={{ base: 'full', md: 'sm' }}
            justifyContent="center"
          >
            <InputGroup bg="white" borderRadius="4">
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Cari Pembeli..."
                onKeyUp={(e) => doBuyerFilter(e.target.value)}
              />
            </InputGroup>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Section1
