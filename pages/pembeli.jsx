import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { NextSeo } from 'next-seo'
import { setSlugBuyer } from '@/common/reducer/slugPage/action'
import PembeliPage from '@/components/templates/Pembeli/index'
import { getCategoryBuyers } from '@/common/reducer/master/action'

function Pembeli(props) {
  useEffect(() => {
    props.getCategoryBuyers('/category-buyers')
  }, [])

  return (
    <>
      <NextSeo
        title="Pembeli | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Pembeli | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          images: [
            {
              // url: "https://kikiding.space/api/social-image?title=About Me&description=Know me more&path=https://kikiding.space/about",
            },
          ],
          site_name: 'Eksportin.co.id',
        }}
      />
      <PembeliPage
        category={props.categoryBuyers}
        setSlugBuyer={props.setSlugBuyer}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  categoryBuyers: state.masterData.categoryBuyers,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryBuyers: bindActionCreators(getCategoryBuyers, dispatch),
    setSlugBuyer: bindActionCreators(setSlugBuyer, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pembeli)
