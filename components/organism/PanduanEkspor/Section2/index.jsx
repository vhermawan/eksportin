import React from 'react'
import { Container, Spacer, Text, Box, VStack } from '@chakra-ui/layout'
import {
  Flex,
  StackDivider,
  useColorMode,
  IconButton,
  Button,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Section2 = () => {
  const { colorMode } = useColorMode()
  const router = useRouter()
  return (
    <>
      <Container
        maxW="full"
        paddingInlineEnd="0"
        paddingInlineStart="0"
        pb="10"
        h="max-content"
      >
        <Flex w="full" wrap={{ base: 'wrap', md: 'nowrap' }}>
          <Box
            px={{ base: '4', md: '10', lg: '20', '3xl': '32' }}
            maxW={{ base: 'full', md: '96', lg: 'full' }}
            bg={colorMode === 'light' ? '#F6FAFA' : 'none'}
            pb={{ base: '10', md: '0' }}
          >
            <Text
              fontSize={{ base: 'xl', lg: '3xl', '3xl': '4xl' }}
              fontWeight="extrabold"
              w="max-content"
              mt="12"
            >
              Tahapan Proses Ekspor
            </Text>
            <Text
              fontSize={{ base: 'sm', lg: 'md', '3xl': '2xl' }}
              w={{ base: 'full', md: '56', lg: 'sm', '3xl': 'xl' }}
              textAlign={{ base: 'justify', md: 'left', lg: 'justify' }}
            >
              Mulai proses ekspor barang dan pelajari bagaimana alur serta
              berkas yang diperlukan dalam proses eskpor barang.
            </Text>
          </Box>
          <Spacer display={{ base: 'none', md: 'block' }} />
          <Box w="full">
            <VStack
              spacing={4}
              align="flex-start"
              ml={{ base: '0', lg: '10' }}
              w={{ base: 'full', lg: 'md' }}
              divider={<StackDivider borderColor="gray.200" />}
              p="4"
              maxH="max-content"
            >
              <Box h="min-content" mb="4">
                <Flex wrap={{ base: 'wrap', md: 'nowrap' }}>
                  <Box>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                    >
                      01
                    </Text>
                  </Box>
                  <Spacer />
                  <Box ml={{ md: '4' }}>
                    <Text
                      fontSize={{ base: 'lg', md: '2xl', '3xl': '3xl' }}
                      fontWeight="bold"
                    >
                      Sales Contract Process
                    </Text>
                    <Text
                      w={{ base: 'full', lg: 'sm', '3xl': 'xl' }}
                      mt="1"
                      fontSize={{ base: 'sm', '3xl': 'xl' }}
                    >
                      Sales contract adalah dokumen/surat persetujuan antara
                      penjual dan pembeli yang merupakan follow-up dari purchase
                      order yang diminta importer. Isinya...
                    </Text>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      size="sm"
                      colorScheme="teal"
                      display={{ base: 'flex', '2xl': 'none' }}
                      variant="outline"
                      onClick={() =>
                        router.push('/panduan-ekspor/sales-contant-process')
                      }
                      mt="4"
                    >
                      Selanjutnya
                    </Button>
                  </Box>
                  <Spacer />
                  <Box ml={{ base: '4', '3xl': '10' }}>
                    <IconButton
                      aria-label="click detail"
                      onClick={() =>
                        router.push('/panduan-ekspor/sales-contant-process')
                      }
                      variant="ghost"
                      _hover={'none'}
                      fontSize={{ '3xl': '3xl' }}
                      icon={<ArrowForwardIcon />}
                      display={{ base: 'none', '2xl': 'flex', '3xl': 'flex' }}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box h="min-content" mb="4">
                <Flex wrap={{ base: 'wrap', md: 'nowrap' }}>
                  <Box>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                    >
                      02
                    </Text>
                  </Box>
                  <Spacer />
                  <Box ml={{ md: '4' }}>
                    <Text
                      fontSize={{ base: 'lg', md: '2xl', '3xl': '3xl' }}
                      fontWeight="bold"
                    >
                      L/C Opening Process{' '}
                    </Text>
                    <Text
                      w={{ base: 'full', lg: 'sm', '3xl': 'xl' }}
                      mt="1"
                      fontSize={{ base: 'sm', '3xl': 'xl' }}
                    >
                      Letter of credit (L/C) adalah Jaminan dari bank penerbit
                      kepada eksportir sesuai dengan instruksi dari importer
                      untuk melakukan pembayaran sejumlah
                    </Text>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      size="sm"
                      colorScheme="teal"
                      display={{ base: 'flex', '2xl': 'none' }}
                      variant="outline"
                      onClick={() =>
                        router.push('/panduan-ekspor/lc-opening-process')
                      }
                      mt="4"
                    >
                      Selanjutnya
                    </Button>
                  </Box>
                  <Spacer />
                  <Box ml={{ base: '4', '3xl': '10' }}>
                    <IconButton
                      aria-label="click detail"
                      onClick={() =>
                        router.push('/panduan-ekspor/lc-opening-process')
                      }
                      variant="ghost"
                      _hover={'none'}
                      fontSize={{ '3xl': '3xl' }}
                      icon={<ArrowForwardIcon />}
                      display={{ base: 'none', '2xl': 'flex', '3xl': 'flex' }}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box h="min-content" mb="4">
                <Flex wrap={{ base: 'wrap', md: 'nowrap' }}>
                  <Box>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                    >
                      03
                    </Text>
                  </Box>
                  <Spacer />
                  <Box ml={{ md: '4' }}>
                    <Text
                      fontSize={{ base: 'lg', md: '2xl', '3xl': '3xl' }}
                      fontWeight="bold"
                    >
                      Cargo Shipment Process{' '}
                    </Text>
                    <Text
                      w={{ base: 'full', lg: 'sm', '3xl': 'xl' }}
                      mt="1"
                      fontSize={{ base: 'sm', '3xl': 'xl' }}
                    >
                      Output penting dari proses ini adalah dokumen pengapalan
                      yang merupakan bukti bahwa eksportir telah mengirimkan
                      barang yang dipesan Importir sesuai dengan
                    </Text>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      size="sm"
                      colorScheme="teal"
                      display={{ base: 'flex', '2xl': 'none' }}
                      variant="outline"
                      onClick={() =>
                        router.push('/panduan-ekspor/cargo-shipment-process')
                      }
                      mt="4"
                    >
                      Selanjutnya
                    </Button>
                  </Box>
                  <Spacer />
                  <Box ml={{ base: '4', '3xl': '10' }}>
                    <IconButton
                      aria-label="click detail"
                      onClick={() =>
                        router.push('/panduan-ekspor/cargo-shipment-process')
                      }
                      variant="ghost"
                      _hover={'none'}
                      fontSize={{ '3xl': '3xl' }}
                      icon={<ArrowForwardIcon />}
                      display={{ base: 'none', '2xl': 'flex', '3xl': 'flex' }}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box h="min-content" mb="4">
                <Flex wrap={{ base: 'wrap', md: 'nowrap' }}>
                  <Box>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'xl', '3xl': '3xl' }}
                    >
                      04
                    </Text>
                  </Box>
                  <Spacer />
                  <Box ml={{ md: '4' }}>
                    <Text
                      fontSize={{ base: 'lg', md: '2xl', '3xl': '3xl' }}
                      fontWeight="bold"
                    >
                      Shipping Document Negotiation Process{' '}
                    </Text>
                    <Text
                      w={{ base: 'full', lg: 'sm', '3xl': 'xl' }}
                      mt="1"
                      fontSize={{ base: 'sm', '3xl': 'xl' }}
                    >
                      Proses ini adalah proses penguangan dokumen pengapalan
                      bagi eksportir dan merupakan proses untuk claim barang
                      yang telah dibayar bagi Importir
                    </Text>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      size="sm"
                      colorScheme="teal"
                      display={{ base: 'flex', '2xl': 'none' }}
                      variant="outline"
                      onClick={() =>
                        router.push(
                          '/panduan-ekspor/shipping-document-negotiation-process',
                        )
                      }
                      mt="4"
                    >
                      Selanjutnya
                    </Button>
                  </Box>
                  <Spacer />
                  <Box ml={{ base: '4', '3xl': '10' }}>
                    <IconButton
                      aria-label="click detail"
                      onClick={() =>
                        router.push(
                          '/panduan-ekspor/shipping-document-negotiation-process',
                        )
                      }
                      variant="ghost"
                      _hover={'none'}
                      fontSize={{ '3xl': '3xl' }}
                      icon={<ArrowForwardIcon />}
                      display={{ base: 'none', '2xl': 'flex', '3xl': 'flex' }}
                    />
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Section2
