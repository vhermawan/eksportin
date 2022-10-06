import React from 'react'
import { NextSeo } from 'next-seo'
import PanduanEksporPage from '@/components/templates/Panduan/index'

export default function PanduanEkspor() {
  return (
    <>
      <NextSeo
        title="Panduan Ekspor | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.vercel.app',
          title: 'Panduan Ekspor | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          site_name: 'Eksportin.vercel.app',
        }}
      />
      <PanduanEksporPage />
    </>
  )
}
