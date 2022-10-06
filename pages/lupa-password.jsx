import React, { useState } from 'react'
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
  createStandaloneToast,
} from '@chakra-ui/react'
import router from 'next/router'
import { NextSeo } from 'next-seo'
import { Formik, Form, Field } from 'formik'
import * as validation from '@/lib/validator/validator'
import { API } from '@/common/api/api'

export default function LupaPassword() {
  const titleColor = useColorModeValue('teal.300', 'teal.200')
  const textColor = useColorModeValue('gray.700', 'white')
  const bgColor = useColorModeValue('white', 'gray.700')
  const [loading, setLoading] = useState(false)
  const toast = createStandaloneToast()

  const submitEmail = (values) => {
    setLoading(true)
    const params = new FormData()
    params.set('email', values.email)
    API.post('/password/create', params)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false)
          toast({
            title: 'Pengiriman Email Berhasil',
            position: `top-right`,
            isClosable: true,
            variant: `left-accent`,
            status: `success`,
          })
          router.push('/login')
        } else {
          setLoading(false)
          toast({
            title: 'Pengiriman Email Gagal',
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
          title: 'Pengiriman Email Gagal',
          position: `top-right`,
          isClosable: true,
          variant: `left-accent`,
          status: `error`,
        })
      })
  }

  const ViewFormForgotPassword = () => {
    return (
      <>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => {
            submitEmail(values)
          }}
        >
          {() => (
            <Form>
              <FormControl>
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
                <Button
                  type="submit"
                  bg="teal.300"
                  fontSize="16px"
                  color="white"
                  fontWeight="bold"
                  w="100%"
                  h="45"
                  mb="24px"
                  aria-label="submit"
                  _hover={{
                    bg: 'teal.200',
                  }}
                  _active={{
                    bg: 'teal.400',
                  }}
                  mt="4"
                  isLoading={loading}
                >
                  Submit
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </>
    )
  }

  return (
    <>
      <NextSeo
        title="Lupa Password | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.vercel.app',
          title: 'Lupa Password | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          site_name: 'Eksportin.vercel.app',
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
            Masukkan alamat email!
          </Text>
          <Text
            fontSize="md"
            color="white"
            fontWeight="normal"
            mt="10px"
            mb="26px"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            Silahkan masukan alamat email anda untuk mengirimkan link untuk
            mereset password anda.
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
            <ViewFormForgotPassword />
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Sudah Ingat Password?
                <Link
                  color={titleColor}
                  as="span"
                  ms="5px"
                  href="/login"
                  fontWeight="bold"
                  onClick={() => router.push('/login')}
                >
                  Log In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
