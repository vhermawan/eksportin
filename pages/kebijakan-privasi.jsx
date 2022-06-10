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

export default function KebijakanPrivasi() {
  const { colorMode } = useColorMode()
  return (
    <>
      <NextSeo
        title="Kebijakan Privasi | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Kebijakan Privasi | Eksportin',
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
                Kebijakan Privasi
              </Heading>
            </Box>
            <Box w="full" pt="10">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Ketentuan privasi menjelaskan tentang infomasi yang kami
                kumpulkan dari anda serta bagaimana informasi tersebut digunakan
                dan dijaga oleh Eksportin. Ketentuan ini berlaku pada setiap
                informasi mengenai anda yang dikumpulkan oleh Eksportin melalui
                beberapa metode, termasuk melalui website (“situs”), aplikasi
                web (“web app”). Dengan membuka situs, mengakses, mengunduh,
                atau menggunakan layanan Eksportin, anda dianggap dengan sadar
                telah memahami adanya aktivitas pengumpulan, pemrosesan,
                pertukaran informasi anda, termasuk informasi pribadi dan data
                pengguna. Privasi anda adalah hal yang penting bagi kami, maka
                mohon untuk pahami bagaimana ketentuan privasi kami berkerja dan
                hubungi kami jika dirasa ada hal yang kurang dipahami. Anda
                dapat menguhubungi kami di eksportin@gmail.com.
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
                Tentang Eksportin
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Selamat datang di Website Eksportin.com. Website ini dimiliki,
                dioperasikan, diselenggarakan oleh Eksportin. Eksportin
                menyediakan website dan layanan yang tersedia secara online
                melalui website: www.eksportin.com , situs-situs turunannya
                serta aplikasi mobile dan aplikasi web Eksportin (selanjutnya
                disebut sebagai “Situs”).
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
                Aturan Privasi Eksportin
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Kebijakan Privasi ini mengatur dan/atau menjelaskan seluruh
                layanan yang sudah Kami sediakan untuk Anda (“Pengguna”)
                gunakan, yaitu layanan yang Kami operasikan sendiri. Untuk
                menjaga kepercayaan Anda kepada Kami, maka Kami akan menjaga
                segala kerahasiaan yang terdapat dalam data pribadi Anda, karena
                Kami menganggap privasi Anda sangat penting bagi Kami. Pada saat
                Anda membuat pemesanan dan atau akun pribadi pada Situs
                Eksportin, maka Kami akan mencatat dan menyimpan informasi dan
                data pribadi Anda. Dimana pada prinsipnya, setiap data yang Anda
                berikan dari waktu ke waktu akan Kami simpan dan Kami gunakan
                untuk kepentingan penyediaan produk dan layanan Kami kepada
                Anda, yaitu antara lain untuk keperluan audit, atau pembayaran,
                Oleh karena pentingnya aturan privasi ini dan ketentuan lainnya
                dalam penggunaan Situs Kami, maka untuk menjaga keamanan data
                pribadi Anda, maka mohon untuk dibaca secara seksama seluruh
                ketentuan dalam aturan privasi ini dan ketentuan lainnya dalam
                website Kami.
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
                Informasi Yang Kami Kumpulkan
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Pada saat Anda mengakses Situs dan atau layanan online yang Kami
                sediakan, maka semua informasi dan data pribadi Anda akan Kami
                kumpulkan dengan ketentuan sebagai berikut :
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
                  Kami akan meminta Anda untuk mengisi data-data pribadi Anda
                  secara benar, jelas, lengkap, akurat dan tidak menyesatkan,
                  seperti nama, alamat email, nomor telepon, informasi yang
                  digunakan untuk pembayaran, dan data-data lain yang Kami
                  perlukan untuk melakukan transaksi melalui website dan layanan
                  online lainnya.
                </ListItem>
                <ListItem>
                  Dalam menggunakan layanan Kami, informasi yang Anda berikan
                  dapat Kami gunakan dan berikan kepada pihak ketiga yang
                  bekerjasama dengan Kami, sejauh untuk kepentingan dan
                  penggunaan layanan Kami.
                </ListItem>
                <ListItem>
                  Segala informasi yang Kami terima dapat Kami gunakan untuk
                  melindungi diri Kami terhadap segala tuntutan dan hukum yang
                  berlaku terkait dengan penggunaan layanan dan pelanggaran yang
                  Anda lakukan pada Situs Kami.
                </ListItem>
                <ListItem>
                  Anda bertanggung jawab atas kerahasiaan informasi dan data
                  pribadi Anda. Demi keamanan data rahasia Anda, Kami sangat
                  menyarankan agar Anda menyimpan akun dan kata sandi yang Anda
                  miliki dengan sebaik-baiknya. Setiap penggunaan yang tidak sah
                  dan tanpa sepengetahuan dan izin Anda menjadi tanggung jawab
                  Anda sendiri dan Kami tidak bertanggung-jawab atas segala
                  kerugian yang ditimbulkan sebagai akibat dari kelalaian yang
                  Anda lakukan.
                </ListItem>
              </OrderedList>
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
                Penggunaan Situs
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Situs Eskportin dapat menggunakan keseluruhan atau sebagian data
                yang diperoleh dan dikumpulkan dari Pengguna untuk hal-hal :
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
                  Memproses segala bentuk permintaan, aktivasi maupun transaksi
                  yang dilakukan oleh Pengguna melalui Situs, termasuk untuk
                  keperluan pemantauan kandang kepada Pengguna;
                </ListItem>
                <ListItem>
                  Melakukan kegiatan internal yang diperlukan untuk menyediakan
                  Layanan pada Website Eksportin.com, seperti pemecahan masalah
                  software, bug, dan untuk memantau dan menganalisis
                  kecenderungan penggunaan Website.
                </ListItem>
                <ListItem>
                  Menghubungi Pengguna melalui email, telepon, dan lain-lain,
                  namun tidak terbatas, untuk membantu dan/atau menyelesaikan
                  proses transaksi maupun proses penyelesaian kendala.
                </ListItem>
                <ListItem>
                  Menggunakan informasi yang diperoleh dari Pengguna untuk
                  tujuan analisis, pengembangan dan pengujian produk guna
                  meningkatkan keamanan dan keamanan layanan-layanan pada
                  Website.
                </ListItem>
                <ListItem>
                  Dalam keadaan tertentu, Eksportin mungkin perlu untuk
                  menggunakan ataupun mengungkapkan data Pengguna untuk tujuan
                  penegakan hukum atau untuk pemenuhan persyaratan hukum dan
                  peraturan yang berlaku, termasuk dalam hal terjadinya sengketa
                  atau proses hukum antara Pengguna dan Eksportin.
                </ListItem>
              </OrderedList>
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
                Pembaruan Aturan Privasi
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Kami berhak untuk melakukan pembaruan, penambahan dan atau
                pengurangan seluruh ataupun sebagian ketentuan dari aturan
                privasi ini dari waktu ke waktu tanpa pemberitahuan terlebih
                dahulu dan segala perubahan yang Kami lakukan akan Kami
                beritahukan melalui website www.broilerx.com. Kami mengharapkan
                agar Anda dapat secara berkala memeriksa mengenai kebijakan ini.
                Dengan mengakses dan menggunakan layanan Kami, maka Kami
                menganggap Anda sudah mengerti dan menyetujui segala kebijakan
                privasi yang tertera di halaman Situs Kami saat itu juga.
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
                Aturan Privasi Cookie
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Cookies adalah file kecil yang secara otomatis akan mengambil
                tempat di dalam perangkat Pengguna yang menjalankan fungsi dalam
                menyimpan preferensi maupun konfigurasi Pengguna selama
                mengunjungi suatu Situs. Kami menggunakan cookie untuk berbagai
                alasan, seperti untuk melacak data Anda jika dibutuhkan untuk
                digunakan, pelacakan transaksi Anda, mengingat preferensi Anda
                dan pada umumnya meningkatkan pengalaman Anda saat menggunakan
                sebuah website. Anda dapat mengatur browser Anda untuk menerima
                atau tidak menerima suatu cookie
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
                Persetujuan
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Dengan membaca seluruh ketentuan ini, mengakses dan menggunakan
                Situs serta layanan Kami, maka Anda dianggap telah membaca,
                memahami, menyetujui, dan menyatakan tunduk pada aturan privasi
                ini beserta perubahan-perubahan yang mungkin Kami lakukan dari
                waktu ke waktu. Apabila Anda tidak dapat menyetujui aturan
                privasi ini, baik secara keseluruhan ataupun sebagian, maka Anda
                tidak diperbolehkan untuk mengakses Website ini ataupun
                menggunakan Layanan yang Kami sediakan.
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
                Tanya Jawab
              </Heading>
            </Box>
            <Box w="full" pt="4">
              <Text
                color={colorMode === 'light' ? '#21383E' : 'white'}
                letterSpacing={'-.0.001rem'}
                lineHeight={'-.0.001rem'}
                fontSize={{ base: 'sm', '3xl': 'xl' }}
              >
                Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih
                lanjut mengenai pesanan Anda, Anda dapat mengirimkan email ke
                eksrpotin@gmail.com.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Layout>
    </>
  )
}
