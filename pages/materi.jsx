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
          url: 'https://eksportin.vercel.app',
          title: 'Materi | Eksportin',
          description:
            'Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor',
          site_name: 'Eksportin.vercel.app',
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
