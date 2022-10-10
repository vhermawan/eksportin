import React from 'react'
import EllipsisText from 'react-ellipsis-text'
import {
  Box,
  Text,
  Flex,
  Image,
  HStack,
  Tag,
  Avatar,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

const CardUmkm = (props) => {
  return (
    <>
      <Box width="full" boxShadow={{ base: 'base', md: 'none' }}>
        <Flex w="full" wrap={{ base: 'no-wrap', md: 'wrap' }}>
          <Box w="full">
            <Image
              src={props.data.image_URL}
              alt={props.data.name}
              loading="lazy"
              objectFit="cover"
              w="full"
              h="200px"
              display={{ base: 'none', md: 'block' }}
            />
          </Box>
          <Avatar
            ml="3"
            name="Dan Abrahmov"
            src={props.data.image_URL}
            size="lg"
            display={{ base: 'block', md: 'none' }}
            mt="3"
          />
          <Box
            w="full"
            boxShadow={{ base: 'none', md: 'base' }}
            p={{ base: '4', '3xl': '6' }}
          >
            <Flex wrap="nowrap" w="full">
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
                onClick={() => props.setSlugBuyer(props.data.slug)}
              >
                <EllipsisText text={props.data.title} length={40} />
              </Link>
            </Flex>
            <Text
              fontSize={{ base: 'xs', '3xl': 'xl' }}
              mr="2"
              textAlign="justify"
            >
              Address:
            </Text>
            <Text
              fontSize={{ base: 'xs', '3xl': 'xl' }}
              mr="2"
              textAlign="justify"
            >
              {props.data.address}
            </Text>
            <Text
              fontSize={{ base: 'xs', '3xl': 'xl' }}
              mr="2"
              mt="2"
              textAlign="justify"
            >
              Products:
            </Text>
            <HStack spacing={4} mt="2">
              {props.data.products.split('|').map((products) => (
                <Tag
                  size="md"
                  key={products}
                  variant="solid"
                  colorScheme="facebook"
                >
                  {products}
                </Tag>
              ))}
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
export default CardUmkm
