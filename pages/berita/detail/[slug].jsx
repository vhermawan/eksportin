import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  Flex,
  Text,
  Image,
  Heading,
  Box,
  Grid,
  Container,
  Breadcrumb,
  useColorMode,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Avatar,
  Skeleton,
  Button,
  Icon,
  Tooltip,
} from '@chakra-ui/react'
import moment from 'moment'
import { connect } from 'react-redux'
import { API } from '@/common/api/api'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { NextSeo } from 'next-seo'
import { FaShareSquare } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import { setSlugNews } from '@/common/reducer/slugPage/action'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const CardNews = dynamic(() => import('@/components/atoms/CardNews/index'))
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)

function detailBerita(props) {
  const { colorMode } = useColorMode()
  const [data, setData] = useState([])
  const detailNews = useSelector((state) => state.slugPageData.detail_news)
  const loaded = useSelector((state) => state.slugPageData.loading)
  const [loadedAdditional, setLoadedAdditionalInfo] = useState(false)
  const [totalLike, setTotalLike] = useState(0)
  const [isCopy, setIsCopy] = useState(false)

  useEffect(() => {
    API.get(`/news-corelate/${detailNews.id_category_news}/${detailNews.id_news}?page=1`)
      .then((res) => {
        setLoadedAdditionalInfo(true)
        setData(res.data.data.news.data)
      })
      .catch((error) => {
        setLoadedAdditionalInfo(true)
        console.log('err', error)
      })
  }, [])

  const getTotalLike = () => {
    API.get(`/get-like-news/${detailNews.id}`)
      .then((res) => {
        setTotalLike(res.data.data.count)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  useEffect(() => {
    getTotalLike()
  }, [])

  const hitLikeNews = () => {
    API.post(`/like-news/${detailNews.id}`)
      .then((res) => {
        getTotalLike()
        console.log('res', res)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  const hitUnLikeNews = () => {
    API.post(`/unlike-news/${detailNews.id}`)
      .then(() => {
        getTotalLike()
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  const likeNews = () => {
    let getLocalStorageId = localStorage.getItem('idnews')
    if (getLocalStorageId !== null) {
      let checkData = JSON.parse(getLocalStorageId).find(
        (data) => data == detailNews.id,
      )
      if (checkData !== undefined) {
        let arrayIdNews = JSON.parse(getLocalStorageId)
        let newArray = arrayIdNews.filter(function (value) {
          return value !== detailNews.id
        })
        localStorage.setItem('idnews', JSON.stringify(newArray))
        hitUnLikeNews()
      } else {
        hitLikeNews()
      }
    } else {
      let arrayIdNews = []
      arrayIdNews.push(detailNews.id)
      localStorage.setItem('idnews', JSON.stringify(arrayIdNews))
      hitLikeNews()
    }
  }

  useEffect (() => {
    if(isCopy){
      setTimeout(() => {
        setIsCopy(false)
      }, 2000)
    }
  },[isCopy])

  return (
    <>
      <NextSeo
        title={`Berita | ${detailNews.title}`}
        description={detailNews.description}
        openGraph={{
          url: 'https://eksportin.co.id',
          title: `Berita | ${detailNews.title}`,
          description: detailNews.description,
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
                <BreadcrumbLink href="/berita">Berita</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem
                isCurrentPage
                color={colorMode === 'light' ? '#1EA59A' : 'blue.200'}
              >
                <BreadcrumbLink>{detailNews.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Flex
            mt="5"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            wrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <Box p="1" w={{ base: 'full', '2xl': '55%' }}>
              <Skeleton isLoaded={loaded}>
                <Text
                  color={colorMode === 'light' ? '#21383E' : 'white'}
                  fontWeight="extrabold"
                  letterSpacing={'-.0.001rem'}
                  lineHeight={'-.0.001rem'}
                  fontSize={{ base: 'sm', '3xl': 'xl' }}
                >
                  Dipublikasikan sejak{' '}
                  {moment(detailNews.created_at).format('DD MMMM YYYY')}
                </Text>
              </Skeleton>
              <Skeleton mt="2" isLoaded={loaded}>
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
                  {detailNews.title}
                </Heading>
              </Skeleton>
              <Box>
                <Flex wrap="wrap" alignItems="center">
                  <Skeleton mt="2" isLoaded={loaded}>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                      size="sm"
                    />
                  </Skeleton>
                  <Skeleton ml="2" isLoaded={loaded}>
                    <Text ml="3">{detailNews.author}</Text>
                  </Skeleton>
                </Flex>
              </Box>
            </Box>
            <Spacer />
            <Box w={{ base: 'full', '2xl': '45%' }}>
              <Skeleton mt="2" isLoaded={loaded}>
                <Image
                  src={
                    detailNews.image_URL
                      ? detailNews.image_URL
                      : 'https://bit.ly/sage-adebayo'
                  }
                  alt={detailNews.title}
                  loading="lazy"
                  objectFit="cover"
                  w="full"
                  h="300px"
                />
              </Skeleton>
            </Box>
          </Flex>
          <Flex
            mt="3"
            w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}
            justifyContent="center"
          >
            <Skeleton mt="2" isLoaded={loaded}>
              <div
                id="description-news"
                dangerouslySetInnerHTML={{ __html: detailNews.description }}
              />
            </Skeleton>
          </Flex>
          <Flex mt="10" w={{ base: 'full', '2xl': '4xl', '3xl': '7xl' }}>
            <Button
              _hover={'none'}
              variant="ghost"
              p="0"
              fontSize="20px"
              onClick={() => likeNews()}
            >
              <AiFillLike />
            </Button>
            <Text my="auto">{totalLike}</Text>
              <CopyToClipboard 
                text={window.location.href} 
                onCopy={() => setIsCopy(true)}
              >
                  <Button
                    _hover={'none'}
                    variant="ghost"
                    p="0"
                    fontSize="20px"
                    ml="5"
                  >
                    <Icon as={FaShareSquare} />
                  </Button>
              </CopyToClipboard>
              
              <Tooltip label='Link telah tersalin' placement='top' isOpen={isCopy}>
                  <Text my="auto">Salin link berita ini</Text>
              </Tooltip>
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
              Berita Lainnya
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
                  return (
                    <>
                      <Skeleton isLoaded={loadedAdditional}>
                        <CardNews key={index} data={item}  setSlugNews={props.setSlugNews}/>
                      </Skeleton>
                    </>
                  )
                })
              ) : (
                <Skeleton isLoaded={loadedAdditional}>
                  <DataNotFound />
                </Skeleton>
              )}
            </Grid>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    setSlugNews: bindActionCreators(setSlugNews, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(detailBerita)
