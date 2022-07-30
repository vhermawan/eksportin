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
import { Formik, Form, Field, useFormikContext } from 'formik'
import * as validation from '@/lib/validator/validator'
import { changeProfileUser } from '@/common/reducer/login/action'
import { TextEditor } from '@/components/atoms/TextEditor'
import { API } from '@/common/api/api'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const UploadFile = dynamic(() => import('@/components/atoms/FormUpload/index'))

function EditProfil(props) {
  const [category] = useState(props.categoryUmkms)
  const [dataUser, setDataUser] = useState(null)
  const [dataUmkm, setDataUmkm] = useState(null)
  const [file, setFile] = useState(null)
  const [description, setDescriptions] = useState('')

  const [token] = useState(Cookies.get('token'))
  const [isError, setIsError] = useState(false)
  const [isType, setIsType] = useState(false)
  
  const [province, setProvince] = useState([])
  const [city, setCity] = useState([])
  const [district, setDistrict] = useState([])
  const [subDistrict, setSubDistrict] = useState([])
  const [idProvince, setIdProvince] = useState('')
  const [idCity, setIdCity] = useState('')  
  const [idDistrict, setIdDistrict] = useState('')
  const [idSubdistrict, setIdSubdistrict] = useState('')

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
      setDescriptions(props.auth.umkm.description)
    } else {
      router.push('/login')
    }
  }, [props.auth])

  let filterTimeout

  const parseDescription = (description) => {
    setIsType(true)
    clearTimeout(filterTimeout)
    filterTimeout = setTimeout(() => {
      console.log('====>', description)
      setDescriptions(description)
    }, 500)
  }

  useEffect(() => {
    if (description !== null) {
      if (description.length === 8 && isType) {
        setIsError(true)
      } else if (description.length > 8 && isType) {
        setIsError(false)
      }
    }
  }, [description, isType])

  const getProvince = () => {
    API.get(`/province`)
    .then((res) => {
      setProvince(res.data.data.province)
    })
    .catch((error) => {
      console.log('err', error)
    })
  }

  const getCity = (id) => {
    console.log('get city nich')
    API.get(`/city/${id}`)
    .then((res) => {
      setCity(res.data.data.city)
    })
    .catch((error) => {
      console.log('err', error)
    })
  }

  const getDistrict = (id) => {
    API.get(`/district/${id}`)
    .then((res) => {
      setDistrict(res.data.data.district)
    })
    .catch((error) => {
      console.log('err', error)
    })
  }

  const getSubdistrict = (id) => {
    API.get(`/subdistrict/${id}`)
    .then((res) => {
      setSubDistrict(res.data.data.subdistrict)
    })
    .catch((error) => {
      console.log('err', error)
    })
  }

  useEffect(() => {
    getProvince()
  },[])

  useEffect(() => {
    if(idProvince !== '') {
      getCity(idProvince)
    }else if(idProvince === "" && province.length !== 0){
      setIdProvince(province[0].prov_id)
    }
  },[idProvince,province])

  useEffect(() => {
    if(idCity !== '') {
      getDistrict(idCity)
    }else if(idCity === "" && city.length !== 0){
      console.log('city',city[0].city_id)
      setIdCity(city[0].city_id)
    }
  },[idCity,city])

  useEffect(() => {
    if(idDistrict !== '') {
      getSubdistrict(idDistrict)
    }else if(idDistrict === "" && district.length !== 0){
      setIdDistrict(district[0].dis_id)
    }
  },[idDistrict,district])

  useEffect(() => {
    if(idSubdistrict === "" && subDistrict.length !== 0){
      setIdSubdistrict(subDistrict[0].dis_id)
    }
  },[subDistrict,idSubdistrict])

  const FormObserver = () => {
    const { values } = useFormikContext();
  
    useEffect(() => {
      if(values.id_province !== ""){
        setIdProvince(values.id_province)
      }

      if(values.id_city !== ""){
        setIdCity(values.id_city)
      }

      if(values.id_district !== ""){
        setIdDistrict(values.id_district)
      }
    }, [values]);
  
    return null;
  };

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
                    instagram:
                      dataUmkm.instagram === null ? '' : dataUmkm.instagram,
                    address: dataUmkm.address === null ? '' : dataUmkm.address,
                    email: dataUser.email,
                    id_category_umkms: dataUmkm.id_category_umkms === null ? '' : dataUmkm.id_category_umkms,
                    tokopedia:
                      dataUmkm.tokopedia === null ? '' : dataUmkm.tokopedia,
                    facebook:
                      dataUmkm.facebook === null ? '' : dataUmkm.facebook,
                    shopee: dataUmkm.shopee === null ? '' : dataUmkm.shopee,
                    id_province: dataUmkm.id_province === null ? idProvince : dataUmkm.id_province,
                    id_city: dataUmkm.id_city === null ? idCity : dataUmkm.id_city,
                    id_district: dataUmkm.id_district === null ? idDistrict : dataUmkm.id_district,
                    id_subdistrict: dataUmkm.id_subdistrict === null ? idSubdistrict : dataUmkm.id_subdistrict,
                  }}
                  onSubmit={(values) => {
                    if(values.id_province === ""){
                      values.id_province = idProvince
                    }

                    if(values.id_city === ""){
                      values.id_city = idCity
                    }

                    if(values.id_district === ""){
                      values.id_district = idDistrict
                    }

                    if(values.id_subdistrict === ""){
                      values.id_subdistrict = idSubdistrict
                    }

                    if (description === null) {
                      setIsError(true)
                    } else if (description.length === 8) {
                      setIsError(true)
                      setIsType(true)
                    } else {
                      props.changeProfileUser(
                        `/change-profile/${dataUmkm.id}`,
                        values,
                        file,
                        description,
                      )
                    }
                  }}
                >
                  {() => (
                    <Form>
                      <FormObserver/>
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
                                isRequired
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
                                <FormErrorMessage>
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
                                isRequired
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
                                <FormErrorMessage>
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
                                isRequired
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
                                <FormErrorMessage>
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
                                isRequired
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
                                <FormErrorMessage>
                                  {form.errors.id_category_umkms}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="id_province">
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.id_province &&
                                  form.touched.id_province
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="id_province"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                 Provinsi
                                </FormLabel>
                                <Select
                                  id="id_province"
                                  name="id_province"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  onChange={form.onChange}
                                  isRequired
                                  {...field}
                                >
                                  {province.map((item) => (
                                    <option key={item.prov_id} value={item.prov_id}>
                                      {item.prov_name}
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.id_province}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="id_city">
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.id_city &&
                                  form.touched.id_city
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="id_city"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                 Kabupaten/Kota
                                </FormLabel>
                                <Select
                                  id="id_city"
                                  name="id_city"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  isRequired
                                  {...field}
                                  disabled= {city.length === 0}
                                >
                                  {city.map((item) => (
                                    <option key={item.city_id} value={item.city_id}>
                                      {item.city_name}
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.id_city}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="id_district">
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.id_district &&
                                  form.touched.id_district
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="id_district"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                 Kecamatan
                                </FormLabel>
                                <Select
                                  id="id_district"
                                  name="id_district"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  isRequired
                                  disabled= {district.length === 0}
                                  {...field}
                                >
                                  {district.map((item) => (
                                    <option key={item.dis_id} value={item.dis_id}>
                                      {item.dis_name}
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.id_district}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="id_subdistrict">
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.id_subdistrict &&
                                  form.touched.id_subdistrict
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="id_subdistrict"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                 Desa
                                </FormLabel>
                                <Select
                                  id="id_subdistrict"
                                  name="id_subdistrict"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  isRequired
                                  disabled= {subDistrict.length === 0}
                                  {...field}
                                >
                                  {subDistrict.map((item) => (
                                    <option key={item.subdis_id} value={item.subdis_id}>
                                      {item.subdis_name}
                                    </option>
                                  ))}
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.id_subdistrict}
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
                                isRequired
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
                                <FormErrorMessage>
                                  {form.errors.address}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <FormControl
                            as={GridItem}
                            colSpan={[6]}
                            isInvalid={isError}
                            isRequired
                          >
                            <FormLabel
                              htmlFor="description"
                              fontSize="sm"
                              fontWeight="md"
                              color={useColorModeValue('gray.700', 'gray.50')}
                            >
                              Deskripsi
                            </FormLabel>
                            <TextEditor
                              setFieldValue={(val) => parseDescription(val)}
                              value={description}
                            />
                            {!isError ? (
                              <></>
                            ) : (
                              <FormErrorMessage>Silahkan isi.</FormErrorMessage>
                            )}
                          </FormControl>

                          <Field
                            name="instagram"
                            validate={validation.Required}
                          >
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.instagram &&
                                  form.touched.instagram
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="instagram"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Instagram
                                </FormLabel>
                                <Input
                                  type="text"
                                  id="instagram"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="link instagram"
                                  {...field}
                                />
                                <FormErrorMessage>
                                  {form.errors.instagram}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="shopee" validate={validation.Required}>
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.shopee && form.touched.shopee
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="shopee"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Shopee
                                </FormLabel>
                                <Input
                                  type="text"
                                  id="shopee"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="link shopee"
                                  {...field}
                                />
                                <FormErrorMessage>
                                  {form.errors.shopee}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="tokopedia"
                            validate={validation.Required}
                          >
                            {({ field, form }) => (
                              <FormControl
                                as={GridItem}
                                colSpan={[6]}
                                isInvalid={
                                  form.errors.tokopedia &&
                                  form.touched.tokopedia
                                }
                                isRequired
                              >
                                <FormLabel
                                  htmlFor="tokopedia"
                                  fontSize="sm"
                                  fontWeight="md"
                                  color={useColorModeValue(
                                    'gray.700',
                                    'gray.50',
                                  )}
                                >
                                  Tokopedia
                                </FormLabel>
                                <Input
                                  type="text"
                                  id="tokopedia"
                                  mt={1}
                                  focusBorderColor="brand.400"
                                  shadow="sm"
                                  size="sm"
                                  w="full"
                                  rounded="md"
                                  placeholder="link tokopedia"
                                  {...field}
                                />
                                <FormErrorMessage>
                                  {form.errors.tokopedia}
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
                              isRequired
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
