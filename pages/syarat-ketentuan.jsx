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
        title="Syarat Ketentuan | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.vercel.app',
          title: 'Syarat Ketentuan | Eksportin',
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
                Syarat Ketentuan
              </Heading>
            </Box>
            <Box w="full" pt="10">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Syarat dan ketentuan berikut menjelaskan peraturan dan ketentuan penggunaan Website Eksportin dengan alamat https://eksportin.vercel.app. 
                Dengan mengakses website ini, kami menganggap Anda telah menyetujui syarat dan ketentuan ini. 
                Jangan lanjutkan penggunaan Eksportin jika Anda menolak untuk menyetujui semua syarat dan 
                ketentuan yang tercantum di halaman ini. 
              </Text>
            </Box>
            <Box maxW={{ base: 'full', '3xl': '60%' }} pt="7">
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '4xl',
                  xl: '4xl',
                  '3xl': '4xl',
                }}
              >
                Cookie
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Website ini menggunakan cookie untuk mempersonalisasi pengalaman online Anda. Dengan mengakses Eksportin, Anda menyetujui penggunaan cookie yang diperlukan. 
                Cookie merupakan file teks yang ditempatkan pada hard disk Anda oleh server halaman web. Cookie tidak dapat digunakan untuk menjalankan program atau mengirimkan virus 
                ke komputer Anda. Cookie yang diberikan telah disesuaikan untuk Anda dan hanya dapat dibaca oleh web server pada domain yang mengirimkan cookie tersebut kepada Anda. 
                Kami dapat menggunakan cookie untuk mengumpulkan, menyimpan, dan melacak informasi untuk keperluan statistik dan pemasaran untuk mengoperasikan website kami. Ada beberapa Cookie wajib yang diperlukan untuk pengoperasian website kami. Cookie ini tidak memerlukan persetujuan Anda karena akan selalu aktif. Perlu diketahui bahwa dengan menyetujui Cookie wajib, Anda juga menyetujui Cookie pihak ketiga, yang mungkin digunakan melalui layanan yang disediakan oleh pihak ketiga jika Anda menggunakan layanan tersebut di website kami, 
                misalnya, jendela tampilan video yang disediakan oleh pihak ketiga dan terintegrasi dengan website kami. 
              </Text>
            </Box>
            <Box maxW={{ base: 'full', '3xl': '60%' }} pt="7">
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '4xl',
                  xl: '4xl',
                  '3xl': '4xl',
                }}
              >
                Lisensi
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
               Kecuali dinyatakan lain, Eksportin dan/atau pemberi lisensinya memiliki hak kekayaan intelektual atas semua materi di Eksportin. Semua hak kekayaan intelektual dilindungi undang-undang. Anda dapat mengaksesnya dari Eksportin untuk penggunaan pribadi Anda sendiri dengan batasan yang diatur dalam syarat dan ketentuan ini. 
              </Text>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Anda dilarang untuk
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
                  Menyalin atau menerbitkan ulang materi dari Eksportin 
                </ListItem>
                <ListItem>
                  Menjual, menyewakan, atau mensublisensikan materi dari Eksportin
                </ListItem>
                <ListItem>
                  Memproduksi ulang, menggandakan, atau menyalin materi dari Eksportin
                </ListItem>
                <ListItem>
                  Mendistribusikan ulang konten dari Eksportin 
                </ListItem>
              </OrderedList>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Beberapa bagian website ini menawarkan kesempatan bagi pengguna untuk memposting serta bertukar pendapat dan informasi di area website tertentu. Eksportin tidak akan memfilter, mengedit, memublikasikan, atau meninjau Komentar di hadapan pengguna di website. Komentar tidak mencerminkan pandangan dan pendapat Eksportin, agennya, dan/atau afiliasinya. Komentar mencerminkan pandangan dan pendapat individu yang memposting pandangan dan pendapatnya. Selama diizinkan oleh undang-undang yang berlaku, Eksportin tidak akan bertanggung jawab atas Komentar atau kewajiban, kerugian, atau pengeluaran yang disebabkan dan/atau ditanggung sebagai akibat dari penggunaan dan/atau penempatan dan/atau penayangan Komentar di website ini. 
              </Text>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Eksportin berhak memantau semua Komentar dan menghapus Komentar apa pun yang dianggap tidak pantas, menyinggung, atau menyebabkan pelanggaran terhadap Syarat dan Ketentuan ini.   
              </Text>
            </Box>
            <Box maxW={{ base: 'full', '3xl': '60%' }} pt="7">
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '4xl',
                  xl: '4xl',
                  '3xl': '4xl',
                }}
              >
                Tanggung Jawab Atas Konten
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
               Kami tidak akan bertanggung jawab atas konten yang muncul di Website Anda. 
               Anda setuju untuk melindungi dan membela kami terhadap semua klaim yang diajukan 
               atas Website Anda. Tidak ada tautan yang muncul di Website mana pun yang dapat dianggap 
               sebagai memfitnah, cabul, atau kriminal, atau yang menyalahi, 
               atau melanggar, atau mendukung pelanggaran lain terhadap hak pihak ketiga. 
              </Text>
            </Box>
            <Box maxW={{ base: 'full', '3xl': '60%' }} pt="7">
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '4xl',
                  xl: '4xl',
                  '3xl': '4xl',
                }}
              >
                Pernyataan Kepemilikan Hak
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
               Kami berhak meminta Anda menghapus semua tautan atau tautan tertentu yang menuju ke Website kami. 
               Anda setuju untuk segera menghapus semua tautan ke Website kami sesuai permintaan. 
               Kami juga berhak mengubah syarat ketentuan ini dan kebijakan penautannya kapan saja. 
               Dengan terus menautkan ke Website kami, Anda setuju untuk terikat dan mematuhi syarat dan ketentuan penautan ini
              </Text>
            </Box>
            <Box maxW={{ base: 'full', '3xl': '60%' }} pt="7">
              <Heading
                as="h1"
                letterSpacing={'-.0.01rem'}
                fontSize={{
                  base: '3xl',
                  md: '3xl',
                  lg: '4xl',
                  xl: '4xl',
                  '3xl': '4xl',
                }}
              >
                Penghapusan tautan dari website kami
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Jika Anda menemukan tautan di Website kami yang bersifat menyinggung karena alasan apa pun, 
                Anda bebas menghubungi dan memberi tahu kami kapan saja. Kami akan mempertimbangkan permintaan 
                untuk menghapus tautan, tetapi kami tidak berkewajiban untuk menanggapi Anda secara langsung. 
                Kami tidak memastikan bahwa informasi di website ini benar. Kami tidak menjamin kelengkapan atau 
                keakuratannya, dan kami juga tidak berjanji untuk memastikan bahwa website tetap tersedia atau 
                materi di website selalu diperbarui.   
              </Text>
            </Box>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}
