import React from 'react'
import EllipsisText from 'react-ellipsis-text'
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Divider,
  Avatar,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

const CardNews = (props) => {
  return (
    <>
      <Box width="full" maxW={'350px'}>
        <Flex w="full" wrap="wrap">
          <Box w="full">
            <Image
              src={props.data.image_URL}
              alt={props.data.title}
              loading="lazy"
              objectFit="cover"
              boxSize="full"
              w="full"
              h="200px"
            />
          </Box>
          <Box>
            <Flex
              wrap="wrap"
              mt="6"
              fontSize={{ base: 'xs', '3xl': 'xl' }}
              letterSpacing={'-.0.01rem'}
            >
              <Text mr="2" color="#1EA59A">
                {props.data.category}
              </Text>
              <Text mr="2">-</Text>
              <Text mr="2" color="#121212">
                {props.data.duration} Menit Membaca
              </Text>
            </Flex>
            <Flex wrap="nowrap" mt="2">
              <Link
                fontSize={{ base: 'md', '3xl': '2xl' }}
                color={useColorModeValue('gray.700', 'white')}
                fontWeight="700"
                _hover={{
                  color: useColorModeValue('gray.600', 'gray.200'),
                  textDecor: 'underline',
                }}
                onClick={() => props.setSlugNews(props.data.slug)}
              >
                <EllipsisText text={props.data.title} length={35} />
              </Link>
            </Flex>
            <Box minH={'70px'} maxW={'300px'}>
              <div
                id="description"
                dangerouslySetInnerHTML={{ __html: props.data.description }}
              />
            </Box>
          </Box>
          <Divider px="3" mt="4" />
          <Box w="full">
            <Flex
              wrap="wrap"
              mt="6"
              justifyContent="space-between"
              fontSize={{ base: 'xs', '3xl': 'xl' }}
              letterSpacing={'-.0.01rem'}
            >
              <Box>
                <Flex wrap="wrap" alignItems="center">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size="sm"
                  />
                  <Text ml="3" fontSize={13}>
                    {props.data.author}
                  </Text>
                </Flex>
              </Box>
              <Button
                size="sm"
                variant="ghost"
                p="0"
                color="#4FD1C5"
                _hover={{ textDecor: 'underline' }}
                aria-label={`Berita ${props.data.title}`}
                onClick={() => props.setSlugNews(props.data.slug)}
              >
                Baca Selengkapnya
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
export default CardNews
