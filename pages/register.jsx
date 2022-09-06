import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import router from 'next/router'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { NextSeo } from 'next-seo'
import * as validation from '@/lib/validator/validator'
import { registerUser } from '@/common/reducer/register/action'

function SignUp(props) {
  let loading = props.loading
  const [token] = useState(Cookies.get('token'))
  const titleColor = useColorModeValue('teal.300', 'teal.200')
  const textColor = useColorModeValue('gray.700', 'white')
  const bgColor = useColorModeValue('white', 'gray.700')

  useEffect(() => {
    if (token) {
      router.push('/')
    }
  }, [token])

  return (
    <>
      <NextSeo
        title="Register | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Register | Eksportin',
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
      <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minH={{ base: '70vh', md: '50vh' }}
          w={{ md: 'calc(100vw - 50px)' }}
          borderRadius={{ md: '15px' }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgImage="/assets/img/BgSignUp.png"
          bgSize="cover"
          mx={{ md: 'auto' }}
          mt={{ md: '14px' }}
        ></Box>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="6.5rem"
          mb="30px"
        >
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Selamat Datang!
          </Text>
          <Text
            fontSize="md"
            color="white"
            fontWeight="normal"
            mt="10px"
            mb="26px"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            Silahkan mendaftar untuk memulai belajar menjadi eksportir handal
            bersama kami.
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
          <Flex
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: '20px' }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={(values) => {
                props.registerUser('/auth/register', values)
              }}
            >
              {() => (
                <Form>
                  <FormControl>
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Nama UMKM
                    </FormLabel>
                    <Field name="name" validate={validation.Required}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="text"
                            placeholder="Nama UMKM anda"
                            mb={!form.errors.name ? '24px' : '0px'}
                            size="lg"
                            id="name"
                            {...field}
                          />
                          <FormErrorMessage mb="24px">
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Email
                    </FormLabel>
                    <Field name="email" validate={validation.ValidateEmail}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="email"
                            placeholder="Alamat email anda"
                            mb={!form.errors.email ? '24px' : '0px'}
                            size="lg"
                            id="email"
                            {...field}
                          />
                          <FormErrorMessage mb="24px">
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Password
                    </FormLabel>
                    <Field
                      name="password"
                      validate={validation.ValidatePassword}
                    >
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <Input
                            fontSize="sm"
                            ms="4px"
                            borderRadius="15px"
                            type="password"
                            placeholder="Password anda"
                            mb={!form.errors.password ? '24px' : '0px'}
                            size="lg"
                            id="password"
                            {...field}
                          />
                          <FormErrorMessage mb="24px">
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      type="submit"
                      bg="teal.300"
                      fontSize="10px"
                      color="white"
                      fontWeight="bold"
                      w="100%"
                      h="45"
                      mb="24px"
                      aria-label="sign-up"
                      _hover={{
                        bg: 'teal.200',
                      }}
                      _active={{
                        bg: 'teal.400',
                      }}
                      isLoading={loading}
                    >
                      SIGN UP
                    </Button>
                  </FormControl>
                </Form>
              )}
            </Formik>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Sudah Memiliki Akun?
                <Link
                  color={titleColor}
                  as="span"
                  ms="5px"
                  href="/login"
                  fontWeight="bold"
                  onClick={() => router.push('/login')}
                >
                  Sign In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.register.auth,
  loading: state.register.loading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
