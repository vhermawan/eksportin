import React from 'react'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function cerita() {
  return (
    <>
      <Layout>
        <p>cerita</p>
      </Layout>
    </>
  )
}
