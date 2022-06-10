import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/PanduanEkspor/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/PanduanEkspor/Section2/index'),
)

export default function Index() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
      </Layout>
    </>
  )
}
