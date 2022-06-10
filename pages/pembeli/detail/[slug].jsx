import React from 'react'
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
import { useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function detailMateri() {
  const { colorMode } = useColorMode()
  const detailBuyer = useSelector((state) => state.slugPageData.detail_buyer)

  return (
    <>
      <NextSeo
        title={`Pembeli | ${detailBuyer.name}`}
        description={detailBuyer.description}
        openGraph={{
          url: 'https://eksportin.co.id',
          title: `Pembeli | ${detailBuyer.name}`,
          description: detailBuyer.description,
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
          w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
        >
          <Flex mt={{ base: '16', '3xl': '36' }}>
            <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/pembeli">Pembeli</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem
                isCurrentPage
                color={colorMode === 'light' ? '#1EA59A' : 'blue.200'}
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
  )
}
