import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { API } from '@/common/api/api'
import { Container } from '@chakra-ui/layout'
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

const CardUmkm = dynamic(() => import('@/components/atoms/CardUmkm/index'))
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)

const Section2 = (props) => {
  let dataCategory = props.category
  const [index, setIndex] = useState(0)
  const [tabs, setTabs] = useState('all')
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
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
    setData([])
  }, [index])

  /*get data when tabs change */
  useEffect(() => {
    if (page === 1) {
      API.get(`/umkms/${tabs}?page=${page}`)
        .then((res) => {
          setData(res.data.data.umkms.data)
          setLastPage(res.data.data.umkms.last_page)
          setLoaded(true)
        })
        .catch((error) => {
          console.log('err', error)
          setLoaded(true)
        })
    } else {
      API.get(`/umkms/${tabs}?page=${page}`)
        .then((res) => {
          const allData = data.concat(res.data.data.umkms.data)
          setData(allData)
          setPage(res.data.data.umkms.current_page)
          setLastPage(res.data.data.umkms.last_page)
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
        paddingTop={{ base: '10', lg: '10' }}
        px={{ base: '5', md: '10', lg: '40', xl: '20', '3xl': '24' }}
        h="max-content"
        centerContent
      >
        <Box w="full">
          <Tabs
            isLazy
            onChange={(index) => setIndex(index)}
            size="lg"
            key="tes"
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
                    <Tab
                      _selected={{ color: '#1EA59A', fontWeight: 'bold' }}
                      key={item.label}
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
                      gap={{ base: 6, '3xl': 14 }}
                      w="full"
                    >
                      {data && data.length > 0 ? (
                        data.map((item, index) => {
                          return (
                            <>
                              <Skeleton isLoaded={loaded}>
                                <CardUmkm
                                  key={index}
                                  data={item}
                                  setSlugUmkm={props.setSlugUmkm}
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
