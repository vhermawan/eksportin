import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Textarea,
  Text,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  GridItem,
  FormErrorMessage,
} from '@chakra-ui/react'
import router from 'next/router'
import { NextSeo } from 'next-seo'
import { bindActionCreators } from 'redux'
import { Formik, Form, Field } from 'formik'
import * as validation from '@/lib/validator/validator'
import { changeProfileUser } from '@/common/reducer/login/action'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const UploadFile = dynamic(() => import('@/components/atoms/FormUpload/index'))

function EditProfil(props) {
  const [category] = useState(props.categoryUmkms)
  const [dataUser, setDataUser] = useState(null)
  const [dataUmkm, setDataUmkm] = useState(null)
  const [file, setFile] = useState(null)

  const [token] = useState(Cookies.get('token'))

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

  useEffect(() => {
    if (props.auth) {
      setDataUser(props.auth.user)
      setDataUmkm(props.auth.umkm)
    } else {
      router.push('/login')
    }
  }, [props.auth])

  return dataUser && dataUmkm ? (
    <>
      <NextSeo
        title="Edit Profil | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Edit Profil | Eksportin',
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
                      Data Profil
                    </Text>
                    <Text
                      fontSize={{ sm: 'sm', md: 'md' }}
                      color={emailColor}
                      fontWeight="semibold"
                    >
                      Masukkan data yang ingin anda ubah dan klik tombol simpan
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
                <Formik
                  initialValues={{
                    name: dataUser.name === null ? '' : dataUser.name,
                    phone: dataUmkm.phone === null ? '' : dataUmkm.phone,
                    description:
                      dataUmkm.description === null ? '' : dataUmkm.description,
                    bussiness_entity:
                      dataUmkm.bussiness_entity === null
                        ? ''
                        : dataUmkm.bussiness_entity,
                    address: dataUmkm.address === null ? '' : dataUmkm.address,
                    email: dataUser.email,
                    id_category_umkms: dataUmkm.id_category_umkms,
                  }}
                  onSubmit={(values) => {
                    props.changeProfileUser(
                      `/change-profile/${dataUmkm.id}`,
                      values,
                      file,
                    )
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
                          <Field name="name" validate={validation.Required}>
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.name && form.touched.name
                                }
                              >
                                <FormLabel
                                  htmlFor="name"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Nama UMKM
                                </FormLabel>
                                <Input
                                  type="text"
                                  id="name"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="Nama UMKM"
                                  {...field}
                                />
                                <FormErrorMessage mb="24px">
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="email"
                            validate={validation.ValidateEmail}
                          >
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.email && form.touched.email
                                }
                              >
                                <FormLabel
                                  htmlFor="email"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Email UMKM
                                </FormLabel>
                                <Input
                                  type="text"
                                  name="email"
                                  id="email"
                                  autoComplete="family-name"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="Email UMKM"
                                  {...field}
                                />
                                <FormErrorMessage mb="24px">
                                  {form.errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="phone" validate={validation.Required}>
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.phone && form.touched.phone
                                }
                              >
                                <FormLabel
                                  htmlFor="phone"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Nomor Telepon
                                </FormLabel>
                                <Input
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="08xxxxxxxxxx"
                                  {...field}
                                />
                                <FormErrorMessage mb="24px">
                                  {form.errors.phone}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="id_category_umkms">
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.id_category_umkms &&
                                  form.touched.id_category_umkms
                                }
                              >
                                <FormLabel
                                  htmlFor="id_category_umkms"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Kategori Umkm
                                </FormLabel>
                                <Select
                                  id="id_category_umkms"
                                  name="id_category_umkms"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  isRequired
                                  {...field}
                                >
                                  {category.map((item) => (
                                    <option key={item.id} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage mb="24px">
                                  {form.errors.id_category_umkms}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="bussiness_entity"
                            validate={validation.Required}
                          >
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.bussiness_entity &&
                                  form.touched.bussiness_entity
                                }
                              >
                                <FormLabel
                                  htmlFor="business_entity"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Nomor Usaha
                                </FormLabel>
                                <Input
                                  type="text"
                                  id="business_entity"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="1268-xxxxxxxxxx"
                                  {...field}
                                />
                                <FormErrorMessage mb="24px">
                                  {form.errors.bussiness_entity}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="address" validate={validation.Required}>
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.address && form.touched.address
                                }
                              >
                                <FormLabel
                                  htmlFor="address"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Alamat
                                </FormLabel>
                                <Textarea
                                  type="text"
                                  name="address"
                                  id="address"
                                  autoComplete="email"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="Jl. Raya Kedungkandang No.1"
                                  {...field}
                                />
                                <FormErrorMessage mb="24px">
                                  {form.errors.address}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="description"
                            validate={validation.Required}
                          >
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.description &&
                                  form.touched.description
                                }
                              >
                                <FormLabel
                                  htmlFor="description"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Deskripsi
                                </FormLabel>
                                <Textarea
                                  type="text"
                                  name="description"
                                  id="description"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="Kami menjual berbagai macam barang"
                                  {...field}
                                />
                                <FormErrorMessage mb="24px">
                                  {form.errors.description}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <FormControl as={GridItem} colSpan={[6]}>
                            <FormLabel
                              htmlFor="photo"
                              fontSize="sm"
                              fontWeight="md"
                              color={useColorModeValue('gray.700', 'gray.50')}
                            >
                              Upload foto
                            </FormLabel>
                            <UploadFile file={file} setFile={setFile} />
                          </FormControl>
                        </SimpleGrid>
                      </Stack>
                      <Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
                        <Button
                          type="submit"
                          color="white"
                          bgColor="#4FD1C5"
                          _focus={{ shadow: '' }}
                          fontWeight="md"
                          aria-label="simpan"
                        >
                          Simpan
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
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

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  categoryUmkms: state.masterData.categoryUmkms,
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeProfileUser: bindActionCreators(changeProfileUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfil)
