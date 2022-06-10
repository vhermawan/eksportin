import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NextSeo } from 'next-seo'
import InstansiPage from '@/components/templates/Instansi/index'
import { setSlugStakeholder } from '@/common/reducer/slugPage/action'
import { getCategoryStakeholders } from '@/common/reducer/master/action'

function Instansi(props) {
  useEffect(() => {
    props.getCategoryStakeholders('/category-stakeholders')
  }, [])

  return (
    <>
      <NextSeo
        title="Instansi | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Instansi | Eksportin',
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
      <InstansiPage
        category={props.categoryStakeholders}
        setSlugStakeholder={props.setSlugStakeholder}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  categoryStakeholders: state.masterData.categoryStakeholders,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryStakeholders: bindActionCreators(
      getCategoryStakeholders,
      dispatch,
    ),
    setSlugStakeholder: bindActionCreators(setSlugStakeholder, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instansi)
