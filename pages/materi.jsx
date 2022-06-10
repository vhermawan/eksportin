import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NextSeo } from 'next-seo'
import MateriPage from '@/components/templates/Materi/index'
import { setSlugCourse } from '@/common/reducer/slugPage/action'
import { getCategoryCourses } from '@/common/reducer/master/action'

function Materi(props) {
  useEffect(() => {
    props.getCategoryCourses('/category-courses')
  }, [])

  return (
    <>
      <NextSeo
        title="Materi | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Materi | Eksportin',
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
      <MateriPage
        category={props.categoryCourses}
        setSlugCourse={props.setSlugCourse}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  categoryCourses: state.masterData.categoryCourses,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryCourses: bindActionCreators(getCategoryCourses, dispatch),
    setSlugCourse: bindActionCreators(setSlugCourse, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Materi)
