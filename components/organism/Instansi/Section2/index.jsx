import dynamic from 'next/dynamic'
import { API } from '@/common/api/api'
import React, { useState, useEffect } from 'react'
import {
  Container,
  Button,
  Grid,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Skeleton,
} from '@chakra-ui/react'

const CardInstansi = dynamic(() =>
  import('@/components/atoms/CardInstansi/index'),
)
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)

const Section2 = (props) => {
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
      key: item.id,
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
    props.setParamCateogry(category[index].value)
    setPage(1)
  }, [index])

  /*get data when tabs change */
  useEffect(() => {
    if (!props.isFilter) {
      if (page === 1) {
        setLoaded(false)
        API.get(`/stakeholders/${tabs}?page=${page}`)
          .then((res) => {
            setLoaded(true)
            setData(res.data.data.stakeholders.data)
            setLastPage(res.data.data.stakeholders.last_page)
          })
          .catch((error) => {
            setLoaded(true)
            console.log('err', error)
          })
      } else {
        setLoaded(false)
        API.get(`/stakeholders/${tabs}?page=${page}`)
          .then((res) => {
            setLoaded(true)
            const allData = data.concat(res.data.data.stakeholders.data)
            setData(allData)
            setLastPage(res.data.data.stakeholders.last_page)
          })
          .catch((error) => {
            setLoaded(true)
            console.log('err', error)
          })
      }
    }
  }, [tabs, page, props.isFilter])

  useEffect(() => {
    setData(props.stakeholders)
  }, [props.stakeholders])

  return (
    <>
      <Container
        maxW="full"
        centerContent
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        h="max-content"
      >
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
                      gap={{ base: 6, '3xl': '10' }}
                      w="full"
                      key={item.label}
                    >
                      {data && data.length > 0 ? (
                        data.map((item, index) => {
                          return (
                            <>
                              <Skeleton isLoaded={loaded} key={index}>
                                <CardInstansi
                                  key={index}
                                  data={item}
                                  setSlugStakeholder={props.setSlugStakeholder}
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
            data && data.length > 0 && lastPage !== page ? 'block' : 'none'
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
