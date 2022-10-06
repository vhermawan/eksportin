import React from 'react'
import dynamic from 'next/dynamic'
import {
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  Container,
  OrderedList,
  useColorMode,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function SyaratKetentuan() {
  const { colorMode } = useColorMode()
  return (
    <>
      <NextSeo
        title="Tim | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.vercel.app',
          title: 'Tim | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          site_name: 'Eksportin.vercel.app',
        }}
      />
      <Layout>
        <Container
          maxW="full"
          p="10"
          h="max-content"
          px={{ base: '5', md: '10', lg: '40', xl: '20', '3xl': '24' }}
          textAlign="justify"
        >
          <Flex mt="32" w="full" wrap={{ base: 'wrap', '3xl': 'wrap' }}>
            <Box maxW={{ base: 'full', '3xl': '60%' }}>
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '5xl',
                  xl: '5xl',
                  '3xl': '6xl',
                }}
              >
                Tim
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Saat ini tim Eksportin terdiri dari gabungan program studi yaitu Teknologi 
                Rekayasa Perangkat Lunak dengan Departemen Ekonomika dan Bisnis Sekolah Vokasi. 
                Eksportin hadir untuk membantu para pelaku UMKM agar menambah pengetahuna mengenai
                bidang ekspor yang ada di Indonesia serta meningkatkan pendapat daerah secara umumnya.
              </Text>
            </Box>
            <Box w="full" pt="4">
              <OrderedList
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                <ListItem>
                  Dinar Nugroho 
                </ListItem>
                <ListItem>
                  Vicky Hermawan
                </ListItem>
                <ListItem>
                  Risang Hapsari
                </ListItem>
                <ListItem>
                  Nabella
                </ListItem>
              </OrderedList>
            </Box>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}
