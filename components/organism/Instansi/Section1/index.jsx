import React from 'react'
import {
  Container,
  Text,
  Box,
  Image,
  Heading,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { API } from '@/common/api/api'

const Section1 = (props) => {
  let filterTimeout

  const searchStakeholders = (query) => {
    clearTimeout(filterTimeout)
    if (!query) {
      props.setIsFilter(false)
    } else {
      filterTimeout = setTimeout(() => {
        console.log('====>', query)
        props.setIsFilter(true)
        let formData = new FormData()
        formData.append('name', query)
        API.post(`/search-stakeholder/${props.paramCategory}`, formData)
          .then((res) => {
            props.setStakeholders(res.data.data.stakeholders)
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
        paddingTop={{ base: '20', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        pb="20"
        h="max-content"
      >
        <Flex wrap="wrap" mb={{ base: '4', md: '12' }} w="full">
          <Box
            w={{ base: 'full', md: '55%' }}
            maxW="full"
            mr="auto"
            display={{ base: 'block', md: 'none' }}
            mt="16"
          >
            <Image
              src="/assets/img/instansi-section1.png"
              alt="Berita"
              loading="lazy"
            />
          </Box>
          <Box
            w={{ base: 'full', md: '45%', '3xl': '45%' }}
            maxW="full"
            mr="auto"
            p={{ base: '4', md: '12', '3xl': '20' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '4xl', '3xl': '6xl' }}
              fontWeight="bold"
            >
              Instansi Bersama Eksportin
            </Heading>
            <Text
              mt="4"
              maxW={{ base: 'sm', '3xl': 'xl' }}
              fontSize={{ '3xl': 'xl' }}
            >
              Temukan daftar instansi yang terafiliasi bersama eksportin dan
              pasarkan produk yang sesuai
            </Text>
            <InputGroup
              bg="white"
              borderRadius="xl"
              size="md"
              mt="4"
              w={{ base: 'full', md: 'xs' }}
              borderColor="#A7BAC5"
            >
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Cari Instansi..."
                onKeyUp={(e) => searchStakeholders(e.target.value)}
              />
            </InputGroup>
          </Box>
          <Box
            w={{ base: 'full', md: '55%' }}
            maxW="full"
            mr="auto"
            display={{ base: 'none', md: 'block' }}
            mt={{ '3xl': '0' }}
          >
            <Image
              src="/assets/img/instansi-section1.png"
              alt="Berita"
              loading="lazy"
              w={{ '3xl': '3xl' }}
            />
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Section1
