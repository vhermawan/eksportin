import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { NextSeo } from 'next-seo'
import UMKMPage from '@/components/templates/UMKM/index'
import { setSlugUmkm } from '@/common/reducer/slugPage/action'
import { getCategoryUmkms } from '@/common/reducer/master/action'

function Umkm(props) {
  useEffect(() => {
    props.getCategoryUmkms('/category-umkms')
  }, [])

  return (
    <>
      <NextSeo
        title="Umkm | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.vercel.app',
          title: 'Umkm | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          site_name: 'Eksportin.vercel.app',
        }}
      />
      <UMKMPage
        category={props.categoryUmkms}
        setSlugUmkm={props.setSlugUmkm}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  categoryUmkms: state.masterData.categoryUmkms,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryUmkms: bindActionCreators(getCategoryUmkms, dispatch),
    setSlugUmkm: bindActionCreators(setSlugUmkm, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Umkm)
