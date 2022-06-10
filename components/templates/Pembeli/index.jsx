import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/organism/Layout/index'))
const Section1 = dynamic(() =>
  import('@/components/organism/Pembeli/Section1/index'),
)
const Section2 = dynamic(() =>
  import('@/components/organism/Pembeli/Section2/index'),
)

export default function Index(props) {
  const [buyers, setBuyers] = useState([])
  const [isFilter, setIsFilter] = useState(false)
  const [paramCategory, setParamCateogry] = useState('all')
  return (
    <>
      <Layout>
        <Section1
          buyers={buyers}
          setBuyers={setBuyers}
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          paramCategory={paramCategory}
        />
        <Section2
          buyers={buyers}
          setBuyers={setBuyers}
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          category={props.category}
          setSlugBuyer={props.setSlugBuyer}
          setParamCateogry={setParamCateogry}
        />
      </Layout>
    </>
  )
}
