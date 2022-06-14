import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { FaUserAlt, FaEdit } from 'react-icons/fa'
import Cookies from 'js-cookie'
import router from 'next/router'
import { NextSeo } from 'next-seo'
import { API } from '@/common/api/api'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Card = dynamic(() => import('@/components/atoms/Card/Card'))
const CardBody = dynamic(() => import('@/components/atoms/Card/CardBody'))
const CardHeader = dynamic(() => import('@/components/atoms/Card/CardHeader'))
const CardMateri = dynamic(() => import('@/components/atoms/CardMateri/index'))
const DataNotFound = dynamic(() =>
  import('@/components/organism/DataNotFound/index'),
)

function Profil(props) {
  const [token] = useState(Cookies.get('token'))
  const [dataUser, setDataUser] = useState(null)
  const [dataUmkm, setDataUmkm] = useState(null)
  const [courseUmkm, setCourseUmkm] = useState([])
  const textColor = useColorModeValue('gray.700', 'white')
  const toast = useToast()

  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.8)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)',
  )
  const borderProfileColor = useColorModeValue(
    'white',
    'rgba(255, 255, 255, 0.31)',
  )
  const emailColor = useColorModeValue('gray.400', 'gray.300')

  const getCourse = () => {
    API.get(`/course-umkm`)
      .then((res) => {
        setCourseUmkm(res.data.data.courseUmkm.data)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  useEffect(() => {
    if (props.auth) {
      setDataUser(props.auth.user)
      setDataUmkm(props.auth.umkm)
      getCourse()
    } else {
      router.push('/login')
    }
  }, [props.auth])

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [token])

  const deleteCourse = (id) => {
    API.delete(`/delete-course-umkm/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: 'Delete Course.',
            description: 'Delete course success.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          getCourse()
        }
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  console.log('dataUmkm',dataUmkm)

  return dataUmkm && dataUser ? (
    <>
      <NextSeo
        title="Profil | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Profil | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          images: [
            {
              // url: "https://kikiding.space/api/social-image?title=About Me&description=Know me more&path=https://kikiding.space/about",
            },
          ],
          site_name: 'Eksportin.co.id',
        }}
      />
      <Layout>
        <Flex direction="column" p={{ base: '0', md: '12' }}>
          <Box
            mb={{ sm: '205px', md: '75px', xl: '70px' }}
            borderRadius="15px"
            px="0px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            align="center"
          >
            <Box
              bgImage="/assets/img/ProfileBackground.webp"
              w="100%"
              h="300px"
              borderRadius="25px"
              bgPosition="50%"
              bgRepeat="no-repeat"
              position="relative"
              display="flex"
              justifyContent="center"
            >
              <Flex
                direction={{ sm: 'column', md: 'row' }}
                mx="1.5rem"
                maxH="330px"
                w={{ sm: '90%', xl: '95%' }}
                justifyContent={{ sm: 'center', md: 'space-between' }}
                align="center"
                backdropFilter="saturate(200%) blur(50px)"
                position="absolute"
                boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                border="2px solid"
                borderColor={borderProfileColor}
                bg={bgProfile}
                p="24px"
                borderRadius="20px"
                transform={{
                  sm: 'translateY(45%)',
                  md: 'translateY(110%)',
                  lg: 'translateY(160%)',
                }}
              >
                <Flex
                  align="center"
                  mb={{ sm: '10px', md: '0px' }}
                  direction={{ sm: 'column', md: 'row' }}
                  w={{ sm: '100%' }}
                  textAlign={{ sm: 'center', md: 'start' }}
                >
                  <Avatar
                    me={{ md: '22px' }}
                    src={dataUmkm.image_URL ? dataUmkm.image_URL : "/assets/avatars/avatar4.webp" }
                    w="80px"
                    h="80px"
                    borderRadius="15px"
                  />
                  <Flex direction="column" maxWidth="100%" my={{ sm: '14px' }}>
                    <Text
                      fontSize={{ sm: 'lg', lg: 'xl' }}
                      color={textColor}
                      fontWeight="bold"
                      ms={{ sm: '8px', md: '0px' }}
                    >
                      {dataUser.name}
                    </Text>
                    <Text
                      fontSize={{ sm: 'sm', md: 'md' }}
                      color={emailColor}
                      fontWeight="semibold"
                    >
                      {dataUser.email}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  direction={{ sm: 'column', lg: 'row' }}
                  w={{ sm: '100%', md: '50%', lg: 'auto' }}
                >
                  <Button
                    p="0px"
                    bg="transparent"
                    _hover={{
                      boxShadow:
                        'inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)',
                      borderRadius: '15px',
                      bg: 'hsla(0,0%,100%,.3)',
                    }}
                    aria-label="profil"
                  >
                    <Flex
                      align="center"
                      w={{ sm: '100%', lg: '135px' }}
                      borderRadius="15px"
                      justifyContent="center"
                      py="10px"
                      border="1px solid gray.200"
                      cursor="pointer"
                    >
                      <Icon as={FaUserAlt} me="6px" />
                      <Text fontSize="xs" color={textColor} fontWeight="bold">
                        Profil
                      </Text>
                    </Flex>
                  </Button>
                  <Button
                    p="0px"
                    bg="transparent"
                    onClick={() => router.push('/edit-profil')}
                    aria-label="edit-profil"
                    _hover={{
                      boxShadow:
                        'inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)',
                      borderRadius: '15px',
                      bg: 'hsla(0,0%,100%,.3)',
                    }}
                  >
                    <Flex
                      align="center"
                      w={{ lg: '135px' }}
                      borderRadius="15px"
                      justifyContent="center"
                      py="10px"
                      mx={{ lg: '1rem' }}
                      cursor="pointer"
                    >
                      <Icon as={FaEdit} me="6px" />
                      <Text fontSize="xs" color={textColor} fontWeight="bold">
                        Edit Profil
                      </Text>
                    </Flex>
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Box>
          <Grid
            templateColumns={{ sm: '1fr', xl: 'repeat(2, 1fr)' }}
            gap="22px"
          >
            <Card p="16px">
              <CardHeader p="12px 5px" mb="12px">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Deskripsi
                </Text>
              </CardHeader>
              <CardBody px="5px">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="400"
                    mb="30px"
                  >
                    {dataUmkm.description === null ? '-' : dataUmkm.description}
                  </Text>
                  <Flex align="center" mb="18px">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      me="10px"
                    >
                      Nama Umkm:{' '}
                    </Text>
                    <Text fontSize="md" color="gray.500" fontWeight="400">
                      {dataUmkm.name === null ? '-' : dataUmkm.name}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      me="10px"
                    >
                      Nomor Telepon:{' '}
                    </Text>
                    <Text fontSize="md" color="gray.500" fontWeight="400">
                      {dataUmkm.phone === null ? '-' : dataUmkm.phone}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      me="10px"
                    >
                      Email:{' '}
                    </Text>
                    <Text fontSize="md" color="gray.500" fontWeight="400">
                      {dataUser.email === null ? '-' : dataUser.email}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      me="10px"
                    >
                      Alamat:{' '}
                    </Text>
                    <Text fontSize="md" color="gray.500" fontWeight="400">
                      {dataUmkm.address === null ? '-' : dataUmkm.address}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      me="10px"
                    >
                      Nomor Badan Usaha:{' '}
                    </Text>
                    <Text fontSize="md" color="gray.500" fontWeight="400">
                      {dataUmkm.bussiness_entity === null
                        ? '-'
                        : dataUmkm.bussiness_entity}
                    </Text>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>

            <Card p="16px" my={{ sm: '24px', xl: '0px' }}>
              <CardHeader p="12px 5px" mb="12px">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Materi yang Telah Diambil
                </Text>
              </CardHeader>
              <CardBody px="5px" float="left">
                <Grid
                  templateColumns={{
                    sm: '1fr',
                    md: '1fr 1fr',
                    xl: 'repeat(1, 1fr)',
                  }}
                  templateRows={{
                    sm: '1fr 1fr 1fr auto',
                    md: '1fr 1fr',
                    xl: '1fr',
                  }}
                  gap="24px"
                >
                  {courseUmkm && courseUmkm.length > 0 ? (
                    courseUmkm.map((item, index) => {
                      return (
                        <CardMateri
                          key={index}
                          data={item}
                          isProfile={true}
                          deleteCourse={deleteCourse}
                        />
                      )
                    })
                  ) : (
                    <DataNotFound />
                  )}
                </Grid>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
      </Layout>
    </>
  ) : (
    <>
      <div></div>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil)
