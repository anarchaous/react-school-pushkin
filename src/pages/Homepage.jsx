import { useState } from 'react'
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Secondmain from '../components/Secondmain.jsx'
import Schoolnews from '../components/Schoolnews.jsx'
import Aboutschool from '../components/Aboutschool.jsx'
import Geolocation from '../components/Geolocation.jsx'

function Homepage() {
    return (
      <div className='Homepage min-w-screen min-h-screen'>
        <Header />
        <Main />
        <Secondmain />
        <Aboutschool />
        <Schoolnews />
        <Geolocation />
      </div>
    )
  }
  
  export default Homepage;