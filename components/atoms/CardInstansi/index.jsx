import React from 'react'
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Link,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

const CardInstansi = (props) => {
  return (
    <>
      <Box width="full" maxW={"350px"}>
        <Flex w="full" wrap={{ base: 'no-wrap', md: 'wrap' }}>
          <Box>
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
          <Box py="5" display={{ base: 'block', md: 'none' }}>
            <Avatar
              mr="3"
              name={props.data.name}
              src={props.data.image_URL}
              size="xl"
              mt="3"
            />
          </Box>
          <Box>
            <Flex wrap="wrap" mt="6" fontSize={{ base: 'xs', '3xl': 'xl' }}>
              <Text mr="2" color="#1EA59A" letterSpacing={'-.0.01rem'}>
                {props.data.category.toUpperCase()}
              </Text>
            </Flex>
            <Flex wrap="nowrap" mt="2">
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
                onClick={() => props.setSlugStakeholder(props.data.slug)}
              >
                {props.data.name_stakeholder}
              </Link>
            </Flex>
            <Button
              size="sm"
              variant="solid"
              p={{ base: '3', '2xl': '5' }}
              color="white"
              bg="#1EA59A"
              aria-label={`Instansi ${props.data.name}`}
              _hover={{ textDecor: 'underline' }}
              onClick={() => props.setSlugStakeholder(props.data.slug)}
            >
              Lihat Detail
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
export default CardInstansi
