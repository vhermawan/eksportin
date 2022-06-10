import React from 'react'
import { NextSeo } from 'next-seo'
import { connect } from 'react-redux'
import BerandaPage from '@/components/templates/Beranda/index'

function Beranda(props) {
  return (
    <>
      <NextSeo
        title="Beranda | Eksportin"
        description="Eksportin Merupakan Sebuah Website yang bergerak pada bidang ekspor"
        openGraph={{
          url: 'https://eksportin.co.id',
          title: 'Beranda | Eksportin',
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
      <BerandaPage dataUser={props.auth} />
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Beranda)
