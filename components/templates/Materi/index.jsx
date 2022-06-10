import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/Materi/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/Materi/Section2/index'),
)

export default function Index(props) {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2
          category={props.category}
          setSlugCourse={props.setSlugCourse}
        />
      </Layout>
    </>
  )
}
