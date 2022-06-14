const Panduan = [
  {
    title: 'Sales Contant Process',
    slug: 'sales-contant-process',
    image: '/assets/img/panduan.webp',
    sequence: 'Tahap Pertama',
    description: `
            Sales contract adalah dokumen/surat persetujuan antara penjual dan pembeli yang merupakan 
            follow-up dari purchase order yang diminta importer. Isinya mengenai syarat-syarat pembayaran 
            barang yang akan dijual, seperti harga, mutu, jumlah, cara pengangkutan, pembayaran asuransi 
            dan sebagainya. Kontrak ini merupakan dasar bagi pembeli untuk mengisi aplikasi pembukaan L/C kepada Bank.
        `,
    list: [
      {
        title: 'Promosi',
        description: `
                    Kegiatan promosi komoditas yang akan diekspor melalui media promosi seperti 
                    iklan di media elektronik, majalah, Koran, pameran dagang atau melalui badan/lembaga 
                    yang berhubungan dengan kegiatan promosi ekspor seperti Ditjen PEN, Kamar Dagang dan 
                    Industri, Atase perdagangan dan lain sebagainya
                `,
      },
      {
        title: 'Inquiry',
        description: `
                    Pengiriman surat permintaan suatu komoditas tertentu oleh Importir kepada eksportir 
                    (letter of inquiry). Biasanya berisi deskripsi barang, mutu, harga dan waktu pengiriman
                `,
      },
      {
        title: 'Offer Sheet',
        description: `
                    Permintaan Importir akan ditanggapi melalui offer sheet yang dikirimkan eksportir. 
                    Offer sheet ini berisikan keterangan sesuai permintaan Importir mengenai deskripsi barang, 
                    mutu, harga dan waktu pengiriman. Selain itu pada offer sheet ini biasanya ditambahkan 
                    tentang ketentuan pembayaran dan pengiriman sample/brochure
                `,
      },
      {
        title: 'Order Sheet',
        description: `
                    Setelah mendapatkan penawaran dari eksportir dan mempelajarinya, 
                    jika setuju maka Importir akan mengirimkan surat pesanan 
                    dalam bentuk order sheet (purchase order) kepada eksportir
                `,
      },
      {
        title: 'Sale’s Contract',
        description: `
                    Sesuai dengan data dari order sheet maka selanjutnya eksportir 
                    akan menyiapkan surat kontrak jual beli (sale’s contract) yang 
                    ditambah dengan keterangan force majeur clause  dan inspection clause. 
                    Sales contract ini ditandatangani oleh eksportir dan dikirimkan 
                    sebanyak dua rangkap kepada Importir
                `,
      },
      {
        title: 'Sale’s Confirmation',
        description: `
                    Sales contract akan dipelajari oleh Importir, apabila Importir 
                    setuju maka sales contract tersebut akan ditandatangi oleh Importir 
                    untuk kemudian dikembalikan kepada eksportir sebagai sales confirmation. 
                    Sedangkan satu copy lain dari sales contract ini akan disimpan oleh Importir
                `,
      },
    ],
    nextPage: {
      title: 'L/C Opening Process',
      slug: 'lc-opening-process',
      description: 'Letter of credit (L/C) adalah Jaminan dari bank....',
    },
  },
  {
    title: 'L/C Opening Process',
    slug: 'lc-opening-process',
    image: '/assets/img/panduan.webp',
    sequence: 'Tahap Kedua',
    description: `
            Letter of credit  (L/C) adalah Jaminan dari bank penerbit kepada eksportir 
            sesuai dengan instruksi dari importer untuk melakukan pembayaran sejumlah 
            tertentu dengan jangka waktu tertentu atas dasar penyerahan dokumen yang 
            diminta importer
        `,
    list: [
      {
        title: 'Tahap Pertama',
        description: `
                    Importir akan meminta Opening Bank (Bank Devisa) untuk 
                    membuka Letter of Credit sebagai jaminan dan dana yang
                    akan digunakan untuk melakukan pembayaran kepada Eksportir 
                    sesuai dengan kesepakatan pada sales contract. L/C yang 
                    dibuka adalah untuk dan atas nama eksportir atau orang 
                    atau badan lain yang ditunjuk eksportir sesuai dengan 
                    syarat pembayaran pada sales contract
                `,
      },
      {
        title: 'Tahap Kedua',
        description: `
                    Opening bank akan melakukan pembukaan L/C melalui bank 
                    korespondennya di Negara Eksportir, dalam hal ini adalah 
                    advising Bank. Proses pembukaan L/C ini dilakukan melalui 
                    media elektronik, sedangkan penegasan dalam bentuk tertulisnya 
                    akan dituangkan dalam L/C confirmation yang diteruskan dari 
                    opening Bank kepada advising Bank untuk disampaikan kepada Eksportir
                `,
      },
      {
        title: 'Tahap Ketiga',
        description: `
                    Permintaan Importir akan ditanggapi melalui offer sheet yang dikirimkan eksportir. 
                    Offer sheet ini berisikan keterangan sesuai permintaan Importir mengenai deskripsi barang, 
                    mutu, harga dan waktu pengiriman. Selain itu pada offer sheet ini biasanya ditambahkan 
                    tentang ketentuan pembayaran dan pengiriman sample/brochure
                `,
      },
    ],
    nextPage: {
      title: 'Cargo Shipment Process',
      slug: 'cargo-shipment-process',
      description:
        'Output penting dari proses ini adalah dokumen pengapalan....',
    },
  },
  {
    title: 'Cargo Shipment Process',
    slug: 'cargo-shipment-process',
    image: '/assets/img/panduan.webp',
    sequence: 'Tahap Ketiga',
    description: `
            Output penting dari proses ini adalah dokumen pengapalan yang 
            merupakan bukti bahwa eksportir telah mengirimkan barang yang 
            dipesan Importir sesuai dengan persyaratan yang tercantum dalam L/C
        `,
    list: [
      {
        title: 'Tahap Pertama',
        description: `
                    Eksportir akan menerima L/C advice sebagai acuan untuk mengirimkan 
                    barang dan saat ini eksportir akan melakukan shipment booking kepada 
                    shipping company sesuai dengan term yang disebutkan dalam sales contract. 
                    Setelah itu eksportir harus mengurus kewajiban Pemberitahuan Ekspor Barang 
                    (PEB) di Bea Cukai di pelabuhan muat. Serta hal lain seperti pembayaran 
                    pajak ekspor (PE) dan Pajak Ekspor Tambahan (PET) di advising Bank
                `,
      },
      {
        title: 'Tahap Kedua',
        description: `
                    Shipping Company akan memuat barang dan menyerahkan bukti penerimaan barang, 
                    kontrak angkutan, bukti kepemilikan barang (bill of lading) serta dokumen 
                    pengapalan lainnya jika ada kepada eksportir, kemudian eksportir akan 
                    mengirimkannya kepada advising Bank untuk dikirimkan ke opening Bank
                `,
      },
      {
        title: 'Tahap Ketiga',
        description: `
                    Shipping Company akan mengangkut barang tersebut ke pelabuhan tujuan yang 
                    disebutkan dalam Bill of Lading (B/L)
                `,
      },
      {
        title: 'Tahap Keempat',
        description: `
                    Importir akan menerima dokumen pengapalan jika kewajiban pembayaran kepada 
                    opening Bank sudah dilakukan. Selanjutnya dokumen pengapalan ini digunakan 
                    untuk mengurus import clearance dengan pihak bea cukai di pelabuhan dan 
                    untuk mengambil muatan di shipping Company yang memuat barang yang dipesan
                `,
      },
      {
        title: 'Tahap Keempat',
        description: `
                    Importir akan menerima dokumen pengapalan jika kewajiban pembayaran kepada 
                    opening Bank sudah dilakukan. Selanjutnya dokumen pengapalan ini digunakan 
                    untuk mengurus import clearance dengan pihak bea cukai di pelabuhan dan 
                    untuk mengambil muatan di shipping Company yang memuat barang yang dipesan
                `,
      },
    ],
    nextPage: {
      title: 'Shipping Document Negotiation Process',
      slug: 'shipping-document-negotiation-process',
      description:
        'Proses ini adalah proses penguangan dokumen pengapalan bagi eksportir dan merupakan....',
    },
  },
  {
    title: 'Shipping Document Negotiation Process',
    slug: 'shipping-document-negotiation-process',
    image: '/assets/img/panduan.webp',
    sequence: 'Tahap Keempat',
    description: `
            Proses ini adalah proses penguangan dokumen pengapalan 
            bagi eksportir dan merupakan proses untuk claim barang 
            yang telah dibayar bagi Importir
        `,
    list: [
      {
        title: 'Tahap Pertama',
        description: `
                    Setelah menerima B/L dari shipping Company, Eksportir 
                    akan menyiapkan semua keperluan dokumen lain yang diisyaratkan 
                    dalam L/C seperti Invoice, packing list, sertifikasi mutu, 
                    Surat Keterangan Negara Asal (SKA) dan lain sebagainya. Semua 
                    dokumen tersebut akan diserahkan kepada negotiating Bank, dalam 
                    hal ini advising Bank, yang ditentukan dalam L/C untuk memeroleh 
                    pembayaran atas L/C
                `,
      },
      {
        title: 'Tahap Kedua',
        description: `
                    Negotiating Bank akan memeriksa kelengkapan dan keakuratan dokumen
                    pengapalan yang dikirimkan eksportir, jika cocok dengan yang diisyaratkan 
                    L/C maka negotiating Bank akan melakukan pembayaran sesuai tagihan eksportir 
                    dari dana L/C yang tersedia
                `,
      },
      {
        title: 'Tahap Ketiga',
        description: `
                    Negotiating Bank akan mengirimkan dokumen pengapalan kepada opening Bank 
                    untuk mendapatkan reimbursement atas pembayaran yang dia lakukan kepada Eksportir
                `,
      },
      {
        title: 'Tahap Keempat',
        description: `
                    Opening Bank, akan memeriksa kelengkapan dan keakuratan dokumen pengapalan, 
                    jika cocok dengan yang diisyaratkan L/C maka opening Bank akan memberikan 
                    pelunasan pembayaran (reimbursement) kepada negotiating Bank
                `,
      },
      {
        title: 'Tahap Keempat',
        description: `
                    Opening Bank selanjutnya memberitahukan penerimaan dokumen pengapalan kepada 
                    Importir. Importir akan menyelesaikan pelunasan dokumen itu untuk mendapatkan 
                    dokumen pengapalan yang berfungsi untuk mengambil barang pesanan dari shipping 
                    agent dan bea cukai setempat
                `,
      },
    ],
    nextPage: {
      title: 'Kembali ke beranda',
      slug: '',
      description: '',
    },
  },
]

export default Panduan
