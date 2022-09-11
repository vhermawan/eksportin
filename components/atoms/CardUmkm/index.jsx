import React from 'react'
import EllipsisText from 'react-ellipsis-text'
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Avatar,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

const CardUmkm = (props) => {
  return (
    <>
      <Box width="full">
        <Flex w="full" wrap={{ base: 'no-wrap', md: 'wrap' }}>
          <Box>
            <Image
              src={
                props.data.image_URL
                  ? props.data.image_URL
                  : 'https://bit.ly/sage-adebayo'
              }
              alt={props.data.name_umkm}
              loading="lazy"
              objectFit="cover"
              w="full"
              h="200px"
              display={{ base: 'none', md: 'block' }}
            />
            <Avatar
              name={props.data.name_umkm}
              src={
                props.data.image_URL
                  ? props.data.image_URL
                  : 'https://bit.ly/dan-abramov'
              }
              loading="lazy"
              size="lg"
              display={{ base: 'block', md: 'none' }}
              mt="3"
            />
          </Box>
          <Box w="full" ml={{ base: '2', md: '0' }}>
            <Flex
              wrap="wrap"
              mt="2"
              fontSize={{ base: '10', md: 'xs', '3xl': 'xl' }}
            >
              <Text mr="2" color="#F5556E">
                {props.data.category}
              </Text>
              <Text mr="2">-</Text>
              <Text mr="2" color="gray.600">
                {props.data.prov_name}
              </Text>
            </Flex>
            <Flex
              wrap="nowrap"
              mt="2"
              fontSize={{ base: '14px', md: 'md', '3xl': 'xl' }}
            >
              <Link
                mr="2"
                mb="2"
                fontSize={{ base: 'md', '3xl': '2xl' }}
                color={useColorModeValue('gray.700', 'white')}
                fontWeight="700"
                _hover={{
                  color: useColorModeValue('gray.600', 'gray.200'),
                  textDecor: 'underline',
                }}
                onClick={() => props.setSlugUmkm(props.data.slug)}
              >
                <EllipsisText text={props.data.name_umkm} length={40} />
              </Link>
            </Flex>
            <Box minH={'70px'} maxW={'350px'} textAlign="justify">
              <div
                id="description"
                dangerouslySetInnerHTML={{ __html: props.data.description }}
              />
            </Box>
            <Button
              size="xs"
              variant="ghost"
              p="0"
              color="#4FD1C5"
              _hover={{ textDecoration: 'underline' }}
              fontSize={{ base: 'x-small', md: 'xs', '3xl': 'lg' }}
              mt={{ base: '2', '3xl': '5' }}
              aria-label={`Umkm ${props.data.name_umkm}`}
              onClick={() => props.setSlugUmkm(props.data.slug)}
            >
              Baca Selengkapnya
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
export default CardUmkm
