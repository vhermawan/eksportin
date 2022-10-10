import React from 'react'
import { Link, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const MenuItems = ({ children }) => {
  const router = useRouter()
  let string = String(children)
  const [color, setColor] = React.useState('')
  const [active, setActive] = React.useState('underline')
  const { colorMode } = useColorMode()

  let stringLower = string.toLowerCase()
  let pathRouter = stringLower.replace(' ', '-')

  React.useEffect(() => {
    let stringLower = string.toLowerCase()
    let pathRouter = stringLower.replace(' ', '-')
    let splitPath = router.asPath.split('/')

    if (colorMode === 'light') {
      if (router.asPath === '/' && children === 'Beranda') {
        setColor('#10214B')
        setActive('underline')
      } else if (router.asPath === `/${pathRouter}`) {
        setColor('#10214B')
        setActive('underline')
      } else if (splitPath[1] === pathRouter) {
        setColor('#10214B')
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

  return (
    <>
      <Link
        mt={{ base: 5, md: 0 }}
        mr={{ base: 6, '3xl': 8 }}
        display="block"
        size="xs"
        backgroundColor="transparent"
        color={color}
        textDecoration={active}
        aria-label="button-header"
        href={'/' + pathRouter}
        fontSize={{ base: 'sm', xl: '12px','2xl': '15px' ,'3xl': '15px' }}
      >
        {children}
      </Link>
    </>
  )
}

export default MenuItems
