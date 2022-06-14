import React from 'react'
import { Link, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const MenuItems = ({ children }) => {
  const router = useRouter()
  let string = String(children)
  const [color, setColor] = React.useState('')
  const [active, setActive] = React.useState('underline')
  const { colorMode } = useColorMode()

  React.useEffect(() => {
    let stringLower = string.toLowerCase()
    let pathRouter = stringLower.replace(' ', '-')
    let splitPath = router.asPath.split('/')

    if (colorMode === 'light') {
      if (router.asPath === '/' && children === 'Beranda') {
        setColor('#1EA59A')
        setActive('underline')
      } else if (router.asPath === `/${pathRouter}`) {
        setColor('#1EA59A')
        setActive('underline')
      } else if (splitPath[1] === pathRouter) {
        setColor('#1EA59A')
        setActive('underline')
      } else {
        setColor('gray.800')
        setActive('none')
      }
    } else {
      if (router.asPath === '/' && children === 'Beranda') {
        setColor('blue.200')
        setActive('underline')
      } else if (router.asPath === `/${pathRouter}`) {
        setColor('blue.200')
        setActive('underline')
      } else if (splitPath[1] === pathRouter) {
        setColor('blue.200')
        setActive('underline')
      } else {
        setColor('white')
        setActive('none')
      }
    }
  }, [router.asPath, colorMode])

  const redirect = (path) => {
    let stringLower = path.toLowerCase()
    let pathRouter = stringLower.replace(' ', '-')
    router.push(`/${pathRouter}`)
  }

  return (
    <>
      <Link
        mt={{ base: 5, md: 0 }}
        mr={{ base: 6, '3xl': 8 }}
        display="block"
        size="xs"
        backgroundColor="transparent"
        onClick={() => redirect(string)}
        color={color}
        textDecoration={active}
        aria-label="button-header"
        fontSize={{ base: 'sm', xl: '12px', '3xl': '14px' }}
      >
        {children}
      </Link>
    </>
  )
}

export default MenuItems
