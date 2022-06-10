import React from 'react'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/organism/Layout/index'))

export default function SyaratKetentuan() {
  return (
    <>
      <Layout>
        <p>termsCondition</p>
      </Layout>
    </>
  )
}
