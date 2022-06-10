import { NextSeo } from 'next-seo'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import BeritaPage from '@/components/templates/Berita/index'
import { getCategoryNews } from '@/common/reducer/master/action'
import { setSlugNews } from '@/common/reducer/slugPage/action'

function Berita(props) {
  useEffect(() => {
    props.getCategoryNews('/category-news')
  }, [])

  return (
    <>
      <NextSeo
        title="Berita | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Berita | Eksportin',
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
      <BeritaPage
        category={props.categoryNews}
        setSlugNews={props.setSlugNews}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  categoryNews: state.masterData.categoryNews,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryNews: bindActionCreators(getCategoryNews, dispatch),
    setSlugNews: bindActionCreators(setSlugNews, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Berita)
