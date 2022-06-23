import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser } from '@/common/reducer/login/action'
import {
  Box,
  Heading,
  Flex,
  Text,
  useColorMode,
  IconButton,
  Button,
  useDisclosure,
  Spacer,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'
import Cookies from 'js-cookie'

const MenuItems = dynamic(() => import('@/components/atoms/MenuItems/index'))

function Header(props) {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [token] = useState(Cookies.get('token'))

  const handleDarkMode = () => {
    toggleColorMode()
  }

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        zIndex="99"
        py="1.5rem"
        width="full"
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        color={colorMode === 'light' ? 'black' : 'white'}
        {...props}
      >
        <Flex align="center" mr={5}>
          <Image
            borderRadius="full"
            boxSize="25px"
            src="/assets/img/Logo.png"
            alt="logo-eksportin"
            mr={4}
            loading="lazy"
          />
          <Heading
            as="h1"
            size="md"
            color="#1EA59A"
            letterSpacing={'-.0.01rem'}
            fontSize={{ base: 'sm', md: 'md', sm: 'md', lg: 'md', '3xl': 'lg' }}
          >
            <Link href="/">Eksportin</Link>
          </Heading>
        </Flex>
        <Box
          display={{ base: 'none', lg: 'flex' }}
          mt={{ base: 4, md: 0 }}
          ml={{ base: 4, md: 10 }}
        >
          <MenuItems>Beranda</MenuItems>
          <MenuItems>Panduan Ekspor</MenuItems>
          <MenuItems>UMKM</MenuItems>
          <MenuItems>Pembeli</MenuItems>
          <MenuItems>Instansi</MenuItems>
          <MenuItems>Berita</MenuItems>
          <MenuItems>Materi</MenuItems>
        </Box>
        <Spacer />
        <Box
          display={
            token !== undefined
              ? { base: 'none' }
              : { base: 'none', lg: 'flex' }
          }
          mt={{ base: 4, md: 0 }}
          alignContent="center"
        >
          <MenuItems>Login</MenuItems>
          <MenuItems>Register</MenuItems>
          <IconButton
            ml={{ base: 4, md: 2 }}
            size="xs"
            bg="transparent"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={() => handleDarkMode()}
            aria-label="button"
          />
        </Box>
        <Box
          display={
            token !== undefined
              ? { base: 'none', lg: 'flex' }
              : { base: 'none' }
          }
          mt={{ base: 4, md: 0 }}
          alignContent="center"
        >
          <HStack spacing="10px">
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  aria-label="profile"
                >
                  <Avatar
                    size={'sm'}
                    src={
                      props.datauser !== null
                        ? props.datauser.umkm.image_URL
                        : '/assets/avatars/avatar4.png'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => router.push('/profil')}>
                    Profil
                  </MenuItem>
                  <MenuItem onClick={() => router.push('/ganti-password')}>
                    Ganti Password
                  </MenuItem>
                  <MenuDivider />
                  <Button
                    mt={{ base: 5, md: 0 }}
                    ml={{ base: 6, '3xl': 2 }}
                    display="block"
                    size="xs"
                    backgroundColor="transparent"
                    aria-label="button-header"
                    fontSize={{ base: 'sm', xl: 'x-small', '3xl': '14px' }}
                    onClick={() => props.logoutuser('/auth/logout')}
                  >
                    Log Out
                  </Button>
                </MenuList>
              </Menu>
            </Flex>
            <IconButton
              ml={{ base: 4, md: 2 }}
              size="xs"
              bg="transparent"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={() => handleDarkMode()}
              aria-label="button"
            />
          </HStack>
        </Box>
        <Box display={{ base: 'block', md: 'block', lg: 'none' }}>
          <IconButton
            size="xs"
            bg="transparent"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={() => handleDarkMode()}
            aria-label="button"
          />
          <Button
            size="xs"
            bg="transparent"
            onClick={isOpen ? onClose : onOpen}
            aria-label="button-modal"
          >
            {' '}
            <HamburgerIcon />
          </Button>
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody mt="5">
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/beranda')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Beranda
                </Text>
              </Box>
            </Flex>
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/panduan-ekspor')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Panduan Ekspor
                </Text>
              </Box>
            </Flex>
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/umkm')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  UMKM
                </Text>
              </Box>
            </Flex>
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/pembeli')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Pembeli
                </Text>
              </Box>
            </Flex>
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/instansi')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Instansi
                </Text>
              </Box>
            </Flex>
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/berita')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Berita
                </Text>
              </Box>
            </Flex>
            <Flex align="center" width="full" wrap="wrap" heigth="full" py="2">
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/materi')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Materi
                </Text>
              </Box>
            </Flex>
            <Flex
              align="center"
              width="full"
              wrap="wrap"
              heigth="full"
              py="2"
              display={
                token !== undefined ? { base: 'none' } : { base: 'flex' }
              }
            >
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/login')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Login
                </Text>
              </Box>
            </Flex>
            <Flex
              align="center"
              width="full"
              wrap="wrap"
              heigth="full"
              py="2"
              display={
                token !== undefined ? { base: 'none' } : { base: 'flex' }
              }
            >
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/register')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Register
                </Text>
              </Box>
            </Flex>
            <Flex
              align="center"
              width="full"
              wrap="wrap"
              heigth="full"
              py="2"
              display={
                token === undefined ? { base: 'none' } : { base: 'flex' }
              }
            >
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/profil')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Profil
                </Text>
              </Box>
            </Flex>
            <Flex
              align="center"
              width="full"
              wrap="wrap"
              heigth="full"
              py="2"
              display={
                token === undefined ? { base: 'none' } : { base: 'flex' }
              }
            >
              <Box
                as="button"
                textAlign="left"
                aria-label="button-modal"
                onClick={() => router.push('/gant-password')}
              >
                <Text fontSize="xs" paddingX="1" fontWeight="bold">
                  {' '}
                  Ganti Password
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const mapStateToProps = () => ({
  // loading: state.auth.loading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    logoutuser: bindActionCreators(logOutUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
