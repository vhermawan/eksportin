import dynamic from 'next/dynamic'
import { Container } from '@chakra-ui/layout'
import React, { useState, useEffect } from 'react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Box,
  Button,
  Skeleton,
} from '@chakra-ui/react'
import { API } from '@/common/api/api'

const CardPembeli = dynamic(() =>
  import('@/components/atoms/CardPembeli/index'),
)
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)

function Section2(props) {
  let dataCategory = props.category
  const [index, setIndex] = useState(0)
  const [tabs, setTabs] = useState('all')
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
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
      key: item.id,
    })
  })

  /*set index first*/
  useEffect(() => {
    setIndex(0)
  }, [])

  /*set value when index change */
  useEffect(() => {
    setTabs(category[index].value)
    props.setParamCateogry(category[index].value)
    setPage(1)
  }, [index])

  /*get data when tabs change */
  useEffect(() => {
    if (!props.isFilter) {
      setLoaded(false)
      if (page === 1) {
        API.get(`/buyers/${tabs}?page=${page}`)
          .then((res) => {
            setData(res.data.data.buyers.data)
            setLastPage(res.data.data.buyers.last_page)
            setLoaded(true)
          })
          .catch((error) => {
            console.log('err', error)
            setLoaded(true)
          })
      } else {
        API.get(`/buyers/${tabs}?page=${page}`)
          .then((res) => {
            const allData = data.concat(res.data.data.buyers.data)
            setData(allData)
            setLastPage(res.data.data.buyers.last_page)
            setLoaded(true)
          })
          .catch((error) => {
            console.log('err', error)
            setLoaded(true)
          })
      }
    }
  }, [tabs, page, props.isFilter])

  useEffect(() => {
    setData(props.buyers)
  }, [props.buyers])

  return (
    <>
      <Container
        maxW="full"
        paddingTop="10"
        px={{ base: '5', md: '16', lg: '40', xl: '20' }}
        h="max-content"
        centerContent
      >
        <Box w="full">
          <Tabs
            isLazy
            onChange={(index) => setIndex(index)}
            size="sm"
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
              {category.map((item, index) => {
                return (
                  <>
                    <Tab
                      _selected={{ color: '#10214B', fontWeight: 'bold' }}
                      key={index}
                    >
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
                                <CardPembeli
                                  key={index}
                                  data={item}
                                  setSlugBuyer={props.setSlugBuyer}
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
            bgColor="#10214B"
            size="sm"
            color="white"
            p={{ base: '4', md: '8', xl: '6', '3xl': '6' }}
            onClick={() => setPage(page + 1)}
            display={props.isFilter ? 'none' : 'flex'}
            aria-label="muat-lebih-banyak"
          >
            Muat Lebih Banyak
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Section2
