import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const PublicLayout = (props) => {
  return (
    <div>
        {<Header/>}
        <main>{props.children}</main>
        <Footer/>
    </div>
  )
}

export default PublicLayout