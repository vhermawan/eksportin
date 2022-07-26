import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
  Flex,
  Text,
  Image,
  Heading,
  Container,
  Breadcrumb,
  useColorMode,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { NextSeo } from 'next-seo'
import { API } from '@/common/api/api'
import { CircleSpinner } from 'react-spinners-kit'
import { useRouter } from 'next/router'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function detailInstansi() {
  const { colorMode } = useColorMode()
  const [detailStakeholder, setDetailStakeholder] = React.useState(null)
  const router = useRouter()

  useEffect(() => {
    API.get(`/stakeholder-detail/${router.query.slug}`)
      .then((res) => {
        setDetailStakeholder(res.data.data.stakeholder)
      })
      .catch((error) => {
        console.error('res', error)
      })
  }, [])

  return (
    <>
      {!detailStakeholder ? (
        <Flex h="100vh" alignItems="center" justifyContent="center">
          <CircleSpinner size={70} color="#1EA59A" loading={true} />
        </Flex>
      ) : (
        <>
          <NextSeo
            title={`Instansi | ${detailStakeholder.name_stakeholder}`}
            description={detailStakeholder.description}
            openGraph={{
              url: 'https://eksportin.co.id',
              title: `Instansi | ${detailStakeholder.name_stakeholder}`,
              description: detailStakeholder.description,
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
                    <BreadcrumbLink href="/instansi">Instansi</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem
                    isCurrentPage
                    color={colorMode === 'light' ? '#1EA59A' : 'blue.200'}
                  >
                    <BreadcrumbLink>
                      {detailStakeholder.name_stakeholder}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Flex>
              <Flex mt="3" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
                <Text
                  color={colorMode === 'light' ? '#21383E' : 'white'}
                  fontWeight="extrabold"
                  letterSpacing={'-.0.001rem'}
                  lineHeight={'-.0.001rem'}
                  fontSize={{ base: 'sm', '3xl': 'xl' }}
                >
                  {detailStakeholder.category}
                </Text>
              </Flex>
              <Flex mt="3" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
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
                  {detailStakeholder.name_stakeholder}
                </Heading>
              </Flex>
              <Flex mt="3" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
                <Image
                  src={
                    detailStakeholder.image_URL
                      ? detailStakeholder.image_URL
                      : 'https://bit.ly/sage-adebayo'
                  }
                  alt={detailStakeholder.name}
                  loading="lazy"
                  objectFit="cover"
                  boxSize="full"
                  display={{ base: 'none', md: 'block' }}
                />
              </Flex>
              <Flex mt="3" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
                <div
                  id="description-stakeholder"
                  dangerouslySetInnerHTML={{
                    __html: detailStakeholder.description,
                  }}
                />
              </Flex>
            </Container>
          </Layout>
        </>
      )}
    </>
  )
}
