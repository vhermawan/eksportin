import React from 'react'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function tim() {
  return (
    <>
      <Layout>
        <p>tim</p>
      </Layout>
    </>
  )
}
