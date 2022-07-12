import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/Beranda/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/Beranda/Section2/index'),
)
const Section3 = dynamic(() =>
  import('@/components/organism/Beranda/Section3/index'),
)
const Section4 = dynamic(() =>
  import('@/components/organism/Beranda/Section4/index'),
)
const Section5 = dynamic(() =>
  import('@/components/organism/Beranda/Section5/index'),
)

export default function Index(props) {
  return (
    <>
      <Layout dataUser={props.dataUser}>
        <Section1 dataUser={props.dataUser} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Layout>
    </>
  )
}
