import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
  Flex,
  Text,
  Image,
  Grid,
  Heading,
  Container,
  Breadcrumb,
  useColorMode,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import moment from 'moment'
import { NextSeo } from 'next-seo'
import { API } from '@/common/api/api'
import { useSelector } from 'react-redux'
import { ChevronRightIcon } from '@chakra-ui/icons'

const CardUmkm = dynamic(() => import('@/components/atoms/CardUmkm/index'))
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)
const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function detailUmkm() {
  const { colorMode } = useColorMode()
  const [data, setData] = useState([])
  const detailUmkm = useSelector((state) => state.slugPageData.detail_umkm)

  useEffect(() => {
    API.get(`/lasted-umkms/2?page=1`)
      .then((res) => {
        setData(res.data.data.umkm.data)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }, [])

  return (
    <>
      <NextSeo
        title={`Umkm | ${detailUmkm.title}`}
        description={detailUmkm.description}
        openGraph={{
          url: 'https://eksportin.co.id',
          title: `Umkm | ${detailUmkm.title}`,
          description: detailUmkm.description,
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
            justifyContent="center"
          >
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/umkm">Umkm</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem
                isCurrentPage
                color={colorMode === 'light' ? '#1EA59A' : 'blue.200'}
              >
                <BreadcrumbLink>{detailUmkm.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Flex
            mt="3"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            justifyContent="center"
          >
            <Text
              color={colorMode === 'light' ? '#21383E' : 'white'}
              fontWeight="extrabold"
              letterSpacing={'-.0.001rem'}
              lineHeight={'-.0.001rem'}
              fontSize={{ base: 'sm', '3xl': 'xl' }}
            >
              Bergabung Sejak{' '}
              {moment(detailUmkm.created_at)
                .locale('id')
                .format('DD MMMM YYYY')}
            </Text>
          </Flex>
          <Flex
            mt="3"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            justifyContent="center"
          >
            <Heading
              as="h1"
              letterSpacing={'-.0.01rem'}
              fontSize={{
                base: '3xl',
                md: '3xl',
                lg: '7xl',
                xl: '5xl',
                '3xl': '6xl',
              }}
            >
              {detailUmkm.name}
            </Heading>
          </Flex>
          <Flex
            mt="3"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            justifyContent="center"
          >
            <Flex
              wrap="wrap"
              mt="2"
              fontSize={{ base: '10', md: 'xs', '3xl': 'xl' }}
            >
              <Text mr="2" color="#F5556E">
                {detailUmkm.category}
              </Text>
              <Text mr="2">-</Text>
              <Text mr="2" color="#DEDEDE">
                Yogyakarta
              </Text>
            </Flex>
          </Flex>
          <Flex
            mt="3"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            justifyContent="center"
          >
            <Image
              src={
                detailUmkm.image_URL
                  ? detailUmkm.image_URL
                  : 'https://bit.ly/sage-adebayo'
              }
              alt={detailUmkm.name}
              loading="lazy"
              objectFit="cover"
              boxSize="full"
              display={{ base: 'none', md: 'block' }}
            />
          </Flex>
          <Flex
            mt="3"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            justifyContent="center"
          >
            <Text
              color={colorMode === 'light' ? '#21383E' : 'white'}
              letterSpacing={'-.0.001rem'}
              lineHeight={'-.0.001rem'}
              fontSize={{ base: 'sm', '3xl': 'xl' }}
            >
              {detailUmkm.description}
            </Text>
          </Flex>
          <Flex
            top="5"
            bottom="5"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            zIndex={-1}
            height="2px"
            position="relative"
            backgroundColor="gray.200"
          />
          <Flex mt="10" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
            <Text
              color={colorMode === 'light' ? '#21383E' : 'white'}
              fontWeight="extrabold"
              letterSpacing={'-.0.001rem'}
              lineHeight={'-.0.001rem'}
              fontSize={{ base: 'sm', '3xl': '2xl' }}
            >
              UMKM Lainnya
            </Text>
          </Flex>
          <Flex mt="10" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
            <Grid
              templateColumns={
                data && data.length > 0
                  ? { base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }
                  : 'repeat(1, 1fr)'
              }
              gap={{ base: 6, '3xl': 14 }}
              w="full"
            >
              {data && data.length > 0 ? (
                data.map((item, index) => {
                  return <CardUmkm key={index} data={item} />
                })
              ) : (
                <DataNotFound />
              )}
            </Grid>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}
