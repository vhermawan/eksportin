import React from 'react'
import {
  Container,
  Text,
  Image,
  Heading,
  GridItem,
  Grid,
} from '@chakra-ui/react'

const Section1 = () => {
  return (
    <>
      <Container
        maxW="full"
        paddingTop={{ base: '20', md: '28', lg: '72', xl: '32' }}
        px={{ base: '5', md: '16', lg: '40', xl: '20', '3xl': '24' }}
        pb={{ base: '0', md: '20' }}
        h="max-content"
      >
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(9, 1fr)"
          gap={4}
          h="min-content"
          w="full"
        >
          <GridItem
            rowSpan={3}
            colSpan={{ base: 9, lg: 5 }}
            mt={{ base: '10', '3xl': '10' }}
            h="max-content"
          >
            <Image
              src="/assets/img/berita-section1.png"
              alt="Berita"
              loading="lazy"
              mr="auto"
              w="full"
            />
          </GridItem>
          <GridItem
            rowSpan={3}
            colSpan={{ base: 9, lg: 4 }}
            h="max-content"
            p={{ base: '4', md: '12' }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '4xl','2xl': '5xl' ,'3xl': '7xl' }}
              fontWeight="bold"
            >
              Kabar Kegiatan Eskpor Barang Indonesia
            </Heading>
            <Text
              mt="4"
              maxW={{ base: 'sm', '3xl': 'lg' }}
              fontSize={{ '3xl': '2xl' }}
            >
              Berita tentang kegiatan ekspor barang Indonesia bisa anda baca dan
              update bersama Eksportin
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
export default Section1
