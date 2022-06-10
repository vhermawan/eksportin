import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/Instansi/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/Instansi/Section2/index'),
)

export default function Index(props) {
  const [stakeholders, setStakeholders] = useState([])
  const [paramCategory, setParamCateogry] = useState('all')
  const [isFilter, setIsFilter] = useState(false)
  return (
    <>
      <Layout>
        <Section1
          stakeholders={stakeholders}
          setStakeholders={setStakeholders}
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          paramCategory={paramCategory}
        />
        <Section2
          stakeholders={stakeholders}
          setStakeholders={setStakeholders}
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          setParamCateogry={setParamCateogry}
          category={props.category}
          setSlugStakeholder={props.setSlugStakeholder}
        />
      </Layout>
    </>
  )
}
