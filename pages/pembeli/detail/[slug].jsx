import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
  Text,
  Flex,
  Image,
  Heading,
  Container,
  Breadcrumb,
  useColorMode,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleSpinner } from 'react-spinners-kit'
import { API } from '@/common/api/api'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function detailMateri() {
  const { colorMode } = useColorMode()
  const [detailBuyer, setDetailBuyer] = useState(null)
  const router = useRouter()

  useEffect(() => {
    API.get(`/buyer-detail/${router.query.slug}`)
      .then((res) => {
        setDetailBuyer(res.data.data.buyer)
      })
      .catch((error) => {
        console.error('res', error)
      })
  }, [])

  return (
    <>
      {!detailBuyer ? (
        <Flex h="100vh" alignItems="center" justifyContent="center">
          <CircleSpinner size={70} color="#10214B" loading={true} />
        </Flex>
      ) : (
        <>
          <NextSeo
            title={`Pembeli | ${detailBuyer.name}`}
            description={detailBuyer.description}
            openGraph={{
              url: 'https://eksportin.vercel.app',
              title: `Pembeli | ${detailBuyer.name}`,
              description: detailBuyer.description,
              site_name: 'Eksportin.vercel.app',
            }}
          />
          <Layout>
            <Container
              maxW="full"
              p="10"
              h="max-content"
              px={{ base: '5', md: '10', lg: '40', xl: '20', '3xl': '24' }}
              w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            >
              <Flex mt={{ base: '16', '3xl': '36' }}>
                <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/pembeli">Pembeli</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem
                    isCurrentPage
                    color={colorMode === 'light' ? '#10214B' : 'blue.200'}
                  >
                    <BreadcrumbLink>{detailBuyer.name}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Flex>
              <Flex mt="3">
                <Text
                  color={colorMode === 'light' ? '#21383E' : 'white'}
                  fontWeight="extrabold"
                  letterSpacing={'-.0.001rem'}
                  lineHeight={'-.0.001rem'}
                  fontSize={{ base: 'sm', '3xl': 'xl' }}
                >
                  {detailBuyer.category}
                </Text>
              </Flex>
              <Flex mt="3">
                <Image
                  src={
                    detailBuyer.image_URL
                      ? detailBuyer.image_URL
                      : 'https://bit.ly/sage-adebayo'
                  }
                  alt={detailBuyer.name}
                  loading="lazy"
                  objectFit="cover"
                  w="full"
                  h="300px"
                  display={{ base: 'none', md: 'block' }}
                />
              </Flex>
              <Flex mt="3">
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
                  {detailBuyer.name}
                </Heading>
              </Flex>
              <Flex mt="3" as="section" wrap="wrap">
                <div
                  id="description-buyer"
                  dangerouslySetInnerHTML={{ __html: detailBuyer.description }}
                />
              </Flex>
            </Container>
          </Layout>
        </>
      )}
    </>
  )
}
