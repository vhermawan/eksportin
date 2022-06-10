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
          url: 'https://eksportin.co.id',
          title: 'Panduan Ekspor | Eksportin',
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
      <PanduanEksporPage />
    </>
  )
}
