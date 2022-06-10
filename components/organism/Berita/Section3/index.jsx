import dynamic from 'next/dynamic'
import { API } from '@/common/api/api'
import React, { useState, useEffect } from 'react'
import {
  Container,
  Text,
  Grid,
  Flex,
  useColorMode,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Skeleton,
} from '@chakra-ui/react'

const CardNews = dynamic(() => import('@/components/atoms/CardNews/index'))
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)

const Section3 = (props) => {
  let dataCategory = props.category
  const [index, setIndex] = useState(0)
  const [tabs, setTabs] = useState('all')
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const { colorMode } = useColorMode()
  const [loaded, setLoaded] = useState(false)

  let category = [
    {
      label: 'Semua',
      value: 'all',
    },
  ]

  dataCategory.map((item) => {
    category.push({
      label: item.name,
      value: item.id,
    })
  })

  /*set index first*/
  useEffect(() => {
    setIndex(0)
  }, [])

  /*set value when index change */
  useEffect(() => {
    setTabs(category[index].value)
    setPage(1)
  }, [index])

  /*get data when tabs change */
  useEffect(() => {
    setLoaded(false)
    if (page === 1) {
      API.get(`/news/${tabs}?page=${page}`)
        .then((res) => {
          setData(res.data.data.news.data)
          setLastPage(res.data.data.news.last_page)
          setLoaded(true)
        })
        .catch((error) => {
          console.log('err', error)
          setLoaded(true)
        })
    } else {
      API.get(`/news/${tabs}?page=${page}`)
        .then((res) => {
          const allData = data.concat(res.data.data.news.data)
          setData(allData)
          setLastPage(res.data.data.news.last_page)
          setLoaded(true)
        })
        .catch((error) => {
          console.log('err', error)
          setLoaded(true)
        })
    }
  }, [tabs, page])

  return (
    <>
      <Container
        maxW="full"
        centerContent
        paddingTop={{ base: '5', md: '28', lg: '5' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        h="max-content"
      >
        <Flex
          alignContent="center"
          wrap="wrap"
          textAlign="center"
          w={{ base: 'full', lg: 'container.sm', '3xl': 'container.lg' }}
          flexDirection="column"
        >
          <Text
            as="h1"
            fontWeight="bold"
            letterSpacing={'-.0.01rem'}
            fontSize={{ base: '3xl', '3xl': '5xl' }}
            w={{ base: 'full', md: 'md', '3xl': 'container.md' }}
          >
            Baca Berita Mengenai Ekspor Terbaru di Indonesia
          </Text>
          <Text
            my="3"
            w={{ base: 'full', md: 'md', '3xl': 'container.md' }}
            color={colorMode === 'light' ? '#21383E' : 'white'}
            letterSpacing={'-.0.001rem'}
            lineHeight={'-.0.001rem'}
            fontSize={{ base: 'sm', '3xl': 'xl' }}
          >
            Berita terbaru mengenai dunia ekspor di Indonesia
          </Text>
        </Flex>
        <Box w="full">
          <Tabs
            isLazy
            onChange={(index) => setIndex(index)}
            size="md"
            _selected={index}
          >
            <TabList
              overflowY="hidden"
              sx={{
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {category.map((item) => {
                return (
                  <>
                    <Tab _selected={{ color: '#1EA59A', fontWeight: 'bold' }}>
                      {item.label}
                    </Tab>
                  </>
                )
              })}
            </TabList>
            <TabPanels>
              {category.map((item) => {
                return (
                  <TabPanel key={item.label}>
                    <Grid
                      templateColumns={
                        data && data.length > 0
                          ? { base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }
                          : 'repeat(1, 1fr)'
                      }
                      gap={{ base: 6, '3xl': '10' }}
                      w="full"
                    >
                      {data && data.length > 0 ? (
                        data.map((item, index) => {
                          return (
                            <>
                              <Skeleton isLoaded={loaded}>
                                <CardNews
                                  key={index}
                                  data={item}
                                  setSlugNews={props.setSlugNews}
                                />
                              </Skeleton>
                            </>
                          )
                        })
                      ) : (
                        <Skeleton isLoaded={loaded}>
                          <DataNotFound />
                        </Skeleton>
                      )}
                    </Grid>
                  </TabPanel>
                )
              })}
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          display={
            data && data.length > 0 && page !== lastPage ? 'block' : 'none'
          }
        >
          <Button
            bgColor="#4FD1C5"
            size="sm"
            color="white"
            p={{ base: '4', md: '8', xl: '6', '3xl': '6' }}
            onClick={() => setPage(page + 1)}
          >
            Muat Lebih Banyak
          </Button>
        </Box>
      </Container>
    </>
  )
}
export default Section3
