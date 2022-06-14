import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  FormErrorMessage,
  createStandaloneToast,
} from '@chakra-ui/react'
import router from 'next/router'
import { API } from '@/common/api/api'
import { Formik, Form, Field } from 'formik'
import * as validation from '@/lib/validator/validator'
import { NextSeo } from 'next-seo'

export default function SetPassword() {
  const bgColor = useColorModeValue('white', 'gray.700')
  const [loading, setLoading] = useState(false)
  const toast = createStandaloneToast()

  const submitPassword = (values) => {
    let pathArray = window.location.pathname.split('/')
    let pathName = pathArray[2]

    const params = {
      password: values.password,
      password_confirmation: values.password,
    }

    setLoading(true)
    API.post(`/password/reset/${pathName}`, params)
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
          router.push('/login')
        } else {
          toast({
            title: 'Token Tidak Valid, Silahkan Masukan Email Anda Lagi',
            position: `top-right`,
            isClosable: true,
            variant: `left-accent`,
            status: `error`,
          })
          setLoading(false)
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
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
          bgImage="/assets/img/BgSignUp.webp"
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
            Masukkan password baru!
          </Text>
          <Text
            fontSize="md"
            color="white"
            fontWeight="normal"
            mt="10px"
            mb="26px"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            Silahkan masukan password baru anda.
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
              initialValues={{ password: '' }}
              onSubmit={(values) => {
                submitPassword(values)
              }}
            >
              {() => (
                <Form>
                  <FormControl>
                    <FormLabel
                      ms="4px"
                      fontSize="sm"
                      fontWeight="normal"
                      mt="7"
                    >
                      Password Baru
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
                      aria-label="submit"
                      _hover={{
                        bg: 'teal.200',
                      }}
                      _active={{
                        bg: 'teal.400',
                      }}
                      mt="6"
                      isLoading={loading}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </Form>
              )}
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
