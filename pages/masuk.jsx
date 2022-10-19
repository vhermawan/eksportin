import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Spacer,
  createStandaloneToast,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import router from 'next/router'
import { NextSeo } from 'next-seo'
import { bindActionCreators } from 'redux'
import { Formik, Form, Field } from 'formik'
import * as validation from '@/lib/validator/validator'
import { loginUser } from '@/common/reducer/login/action'

function Login(props) {
  let loading = props.loading
  const {toast} = createStandaloneToast()
  const [token] = useState(Cookies.get('token'))
  const titleColor = useColorModeValue('#10214B', 'teal.200')
  const textColor = useColorModeValue('gray.400', 'white')

  useEffect(() => {
    if (token) {
      router.push('/')
    }
    toast({
      title:
        'Ubah Password Berhasil',
      position: `top-right`,
      isClosable: true,
      variant: `left-accent`,
      status: `success`,
    })
  }, [token])

  return token ? (
    <div></div>
  ) : (
    <>
      <NextSeo
        title="Login | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.vercel.app',
          title: 'Login | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          site_name: 'Eksportin.vercel.app',
        }}
      />
      <Flex position="relative" h="100vh">
        <Flex
          h={{ sm: 'initial', md: '75vh', lg: '97vh' }}
          w="100%"
          maxW="1344px"
          mx="auto"
          justifyContent="space-between"
          mb="30px"
          pt={{ sm: '100px', md: '0px' }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: 'none' }}
            w={{ base: '100%', md: '50%', lg: '42%' }}
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              p="48px"
              mt={{ md: '150px', lg: '80px' }}
            >
              <Heading color={titleColor} fontSize="32px" mb="10px">
                Selamat Datang
              </Heading>
              <Text
                mb="36px"
                ms="4px"
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                Silahkan Masukkan Email dan Password Anda
              </Text>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                  props.loginUser('/auth/login', values)
                }}
              >
                {() => (
                  <Form>
                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                      Email
                    </FormLabel>
                    <Field name="email" validate={validation.ValidateEmail}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <Input
                            borderRadius="15px"
                            fontSize="sm"
                            type="text"
                            id="email"
                            mb={!form.errors.email ? '24px' : '0px'}
                            placeholder="Your email adress"
                            size="lg"
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
                            borderRadius="15px"
                            mb={!form.errors.password ? '36px' : '0px'}
                            fontSize="sm"
                            id="password"
                            type="password"
                            placeholder="Your password"
                            size="lg"
                            {...field}
                          />
                          <FormErrorMessage mb="36px">
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        id="remember-login"
                        colorScheme="teal"
                        me="10px"
                      />
                      <FormLabel
                        htmlFor="remember-login"
                        mb="0"
                        ms="1"
                        fontWeight="normal"
                      >
                        Remember me
                      </FormLabel>
                      <Spacer />
                      <Link
                        color={titleColor}
                        as="span"
                        ms="5px"
                        fontWeight="bold"
                        onClick={() => router.push('/lupa-password')}
                      >
                        Lupa Password?
                      </Link>
                    </FormControl>
                    <Button
                      fontSize="10px"
                      type="submit"
                      bg={titleColor}
                      w="100%"
                      h="45"
                      mb="20px"
                      color="white"
                      mt="20px"
                      aria-label="sign-in"
                      _hover={{
                        bg: 'teal.200',
                      }}
                      _active={{
                        bg: 'teal.400',
                      }}
                      isLoading={loading}
                    >
                      Masuk
                    </Button>
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
                  Belum punya akun?
                  <Link
                    color={titleColor}
                    as="span"
                    ms="5px"
                    fontWeight="bold"
                    onClick={() => router.push('/pendaftaran')}
                  >
                    Pendaftaran
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            display={{ base: 'none', md: 'block' }}
            overflowX="hidden"
            h="100%"
            w="40vw"
            position="absolute"
            right="0px"
          >
            <Box
              bgImage="/assets/img/login.webp"
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              borderBottomLeftRadius="20px"
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
