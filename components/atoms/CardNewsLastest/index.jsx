import React from 'react'
import moment from 'moment'
import EllipsisText from 'react-ellipsis-text'
import {
  Box,
  Flex,
  Image,
  Badge,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

const CardNews = (props) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center" pb="4">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW={{ base: '300px', md: '350px' }}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Image
          src={props.data.image_URL}
          alt={props.data.title}
          roundedTop="lg"
          objectFit="cover"
          loading="lazy"
          w="sm"
          h="200px"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              mt="2"
            >
              {props.data.category} &bull;{' '}
              {moment(props.data.created_at).format('DD MMMM YYYY')}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Link
              fontSize={{ base: 'md', '3xl': 'xl' }}
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
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default CardNews
