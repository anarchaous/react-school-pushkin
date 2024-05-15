import { useState } from 'react'
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Secondmain from '../components/Secondmain.jsx'
import Schoolnews from '../components/Schoolnews.jsx'
import Aboutschool from '../components/Aboutschool.jsx'
import Geolocation from '../components/Geolocation.jsx'
import Footer from '../components/Footer.jsx'

function Homepage() {
    return (
      <div className='Homepage w-full overflow-x-hidden min-h-screen'>
        <Header />
        <Main />
        <Secondmain />
        <Aboutschool />
        <Schoolnews />
        <Geolocation />
        <Footer />
      </div>
    )
  }
  
  export default Homepage;