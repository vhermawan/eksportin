import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/UMKM/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/UMKM/Section2/index'),
)

export default function Index(props) {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 category={props.category} setSlugUmkm={props.setSlugUmkm} />
      </Layout>
    </>
  )
}
