import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/Berita/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/Berita/Section2/index'),
)
const Section3 = dynamic(() =>
  import('@/components/organism/Berita/Section3/index'),
)

export default function Index(props) {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 setSlugNews={props.setSlugNews} />
        <Section3 category={props.category} setSlugNews={props.setSlugNews} />
      </Layout>
    </>
  )
}
