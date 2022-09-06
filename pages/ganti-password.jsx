import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Stack,
  createStandaloneToast,
  GridItem,
  FormErrorMessage,
} from '@chakra-ui/react'
import router from 'next/router'
import { NextSeo } from 'next-seo'
import { API } from '@/common/api/api'
import { Formik, Form, Field } from 'formik'
import * as validation from '@/lib/validator/validator'
const Layout = dynamic(() => import('@/components/organism/Layout/index'))

function EditProfil() {
  const [token] = useState(Cookies.get('token'))
  const toast = createStandaloneToast()
  const [loading, setLoading] = useState(false)
  const textColor = useColorModeValue('gray.700', 'white')
  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.8)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)',
  )
  const borderProfileColor = useColorModeValue(
    'white',
    'rgba(255, 255, 255, 0.31)',
  )
  const emailColor = useColorModeValue('gray.400', 'gray.300')

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [token])

  const changePassword = (values) => {
    const params = new FormData()
    params.set('old_password', values.passwordBefore)
    params.set('password', values.passwordNew)
    params.set('password_confirmation', values.passwordNew)
    setLoading(true)
    API.post('/change-password', params)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false)
          toast({
            title: 'Ubah Password Berhasil',
            position: `top-right`,
            isClosable: true,
            variant: `left-accent`,
            status: `success`,
          })
          router.push('/profil')
        } else {
          setLoading(false)
          toast({
            title: 'Gagal Merubah Password',
            position: `top-right`,
            isClosable: true,
            variant: `left-accent`,
            status: `error`,
          })
        }
      })
      .catch(() => {
        setLoading(false)
        toast({
          title: 'Gagal Merubah Password',
          position: `top-right`,
          isClosable: true,
          variant: `left-accent`,
          status: `error`,
        })
      })
  }

  const ViewFormChangePassword = () => {
    return (
      <>
        <Formik
          initialValues={{
            passwordBefore: '',
            passwordNew: '',
          }}
          onSubmit={(values) => {
            changePassword(values)
          }}
        >
          {() => (
            <Form>
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <Field
                    name="passwordBefore"
                    validate={validation.ValidatePassword}
                  >
                    {({ field, form }) => (
                      <FormControl
                        as={GridItem}
                        colSpan={[6]}
                        isInvalid={
                          form.errors.passwordBefore &&
                          form.touched.passwordBefore
                        }
                      >
                        <FormLabel
                          htmlFor="passwordBefore"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue(
                            'gray.700',
                            'gray.50',
                          )}
                        >
                          Password Lama
                        </FormLabel>
                        <Input
                          type="password"
                          name="passwordBefore"
                          id="passwordBefore"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Masukkan Password"
                          {...field}
                        />
                        <FormErrorMessage mb="24px">
                          {form.errors.passwordBefore}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field
                    name="passwordNew"
                    validate={validation.ValidatePassword}
                  >
                    {({ field, form }) => (
                      <FormControl
                        as={GridItem}
                        colSpan={[6]}
                        isInvalid={
                          form.errors.passwordNew &&
                          form.touched.passwordNew
                        }
                      >
                        <FormLabel
                          htmlFor="passwordNew"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue(
                            'gray.700',
                            'gray.50',
                          )}
                        >
                          Password Baru
                        </FormLabel>
                        <Input
                          type="password"
                          name="passwordNew"
                          id="passwordNew"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Masukkan Password"
                          {...field}
                        />
                        <FormErrorMessage mb="24px">
                          {form.errors.passwordNew}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </SimpleGrid>
              </Stack>
              <Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
                <Button
                  type="submit"
                  color="white"
                  bgColor="#4FD1C5"
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                  isLoading={loading}
                  aria-label="simpan"
                >
                  Simpan
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </>
    )
  }

  return token ? (
    <>
      <NextSeo
        title="Ganti password | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Ganti password | Eksportin',
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
            mb={{ sm: '105px', md: '75px', xl: '70px' }}
            borderRadius="15px"
            px="0px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            align="center"
          >
            <Box
              bgImage="/assets/img/ProfileBackground.png"
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
                mt={{ base: '32', md: '0', xl: '0' }}
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
                  <Flex direction="column" maxWidth="100%" my={{ sm: '14px' }}>
                    <Text
                      fontSize={{ sm: 'lg', lg: 'xl' }}
                      color={textColor}
                      fontWeight="bold"
                      ms={{ sm: '8px', md: '0px' }}
                    >
                      Ubah Password
                    </Text>
                    <Text
                      fontSize={{ sm: 'sm', md: 'md' }}
                      color={emailColor}
                      fontWeight="semibold"
                    >
                      Masukkan password lama dan password baru anda
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{ base: 'initial', md: 'grid' }}
            columns={{ md: 3 }}
            spacing={{ md: 6 }}
          >
            <GridItem mt={[5, null, 0]} colSpan={{ md: 3 }}>
              <ViewFormChangePassword/>                
            </GridItem>
          </SimpleGrid>
        </Box>
        </Flex>
      </Layout>
    </>
  ) : (
    <div></div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfil)
