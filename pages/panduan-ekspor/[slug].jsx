import React from 'react'
import dynamic from 'next/dynamic'
import {
  Box,
  Flex,
  Text,
  Image,
  Spacer,
  Button,
  Heading,
  ListItem,
  Container,
  Breadcrumb,
  OrderedList,
  useColorMode,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import Panduan from '@/data/Panduan'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function detailPanduan() {
  const router = useRouter()
  const { colorMode } = useColorMode()
  let path = window.location.pathname.split('/')
  let data = Panduan.filter((item) => item.slug === path[2])[0]

  return (
    <>
      <NextSeo
        title={`Panduan Ekspor | ${data.title}`}
        description={data.description}
        openGraph={{
          url: 'https://eksportin.co.id',
          title: `Panduan Ekspor | ${data.title}`,
          description: data.description,
          images: [
            {
              // url: "https://kikiding.space/api/social-image?title=About Me&description=Know me more&path=https://kikiding.space/about",
            },
          ],
          site_name: 'Eksportin.co.id',
        }}
      />
      <Layout>
        <Container
          maxW="full"
          p="10"
          h="max-content"
          px={{ base: '5', md: '10', lg: '40', xl: '20', '3xl': '24' }}
          centerContent
        >
          <Flex
            mt={{ base: '16', '3xl': '36' }}
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
          >
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/panduan-ekspor">
                  Panduan Ekspor
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem
                isCurrentPage
                color={colorMode === 'light' ? '#1EA59A' : 'blue.200'}
              >
                <BreadcrumbLink>{data.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Flex
            pt="10"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            wrap={{ base: 'wrap', '3xl': 'wrap' }}
          >
            <Box maxW={{ base: 'full', '3xl': '60%' }}>
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '7xl',
                  xl: '5xl',
                  '3xl': '7xl',
                }}
              >
                {data.title}
              </Heading>
            </Box>
            <Spacer />
            <Box
              position="relative"
              my="auto"
              maxW={{ base: 'full', '3xl': '40%' }}
            >
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': '4xl' }}
              >
                {data.sequence}
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box
              w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
              pt="10"
              h="xl"
            >
              <Image
                boxSize="full"
                objectFit="cover"
                src={data.image}
                alt="logo-landing"
                loading="lazy"
              />
            </Box>
          </Flex>
          <Flex>
            <Box w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }} pt="10">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                {data.description}
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }} pt="10">
              <OrderedList
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                {data.list.map((item) => {
                  return (
                    <>
                      <ListItem>{item.title}</ListItem>
                      <Text>{item.description}</Text>
                    </>
                  )
                })}
              </OrderedList>
            </Box>
          </Flex>
          <Flex
            width={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            zIndex={-1}
            height="1.5px"
            backgroundColor="gray.100"
            mt="10"
            display={data.nextPage ? 'flex' : 'none'}
          />
          <Flex
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            display={data.nextPage ? 'flex' : 'none'}
            wrap={{ base: 'wrap', '3xl': 'wrap' }}
          >
            <Box
              my="4"
              w={{ base: 'full', '2xl': '20%', '3xl': '20%' }}
              pr="10"
              display={{ base: 'none', '2xl' : 'flex', '3xl': 'flex' }}
            >
              <Heading
                as="h6"
                letterSpacing={'-.0.01rem'}
                fontSize={{ base: '2xl' }}
                color="#979797"
                display={{ base: 'flex', '2xl': 'none' }}
              >
                Selanjutnya
              </Heading>
              <Button
                rightIcon={<ArrowForwardIcon />}
                border="none"
                fontSize="xl"
                colorScheme="teal"
                variant="outline"
                aria-label="panduan-eskpor"
                onClick={() =>
                  router.push(`/panduan-ekspor/${data.nextPage.slug}`)
                }
                display={{ base: 'none', '2xl': 'flex', '3xl': 'flex' }}
              >
                Selanjutnya
              </Button>
            </Box>
            <Box
              my="4"
              w={{ base: 'full', '2xl': '70%', '3xl': '70%' }}
              pl={{ base: '0', '3xl': '10' }}
            >
              <Heading
                as="h3"
                fontSize={{
                  base: 'xl',
                  md: '3xl',
                  lg: '3xl',
                  '2xl': '4xl',
                  '3xl': '4xl',
                }}
              >
                {data.nextPage.title}
              </Heading>
              <Text
                letterSpacing={'-.0.01rem'}
                fontSize={{ base: 'lg' }}
                mt="5"
              >
                {data.nextPage.description}
              </Text>
            </Box>
            <Box
              my="4"
              w={{ base: 'full', '2xl': '10%', '3xl': '10%' }}
              pl={{ base: '0', '3xl': '10' }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                size="sm"
                colorScheme="teal"
                display={{ base: 'flex', '2xl': 'none' }}
                variant="outline"
                aria-label="panduan-eskpor"
                onClick={() =>
                  router.push(`/panduan-ekspor/${data.nextPage.slug}`)
                }
              >
                Selanjutnya
              </Button>
            </Box>
          </Flex>
          <Flex
            width={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            zIndex={-1}
            height="1.5px"
            backgroundColor="gray.100"
            display={data.nextPage ? 'flex' : 'none'}
          />
        </Container>
      </Layout>
    </>
  )
}
