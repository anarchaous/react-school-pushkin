import React from 'react'
import Header from '../components/Header.jsx'
import NewsMain from '../news-page-components/newsMain.jsx'
import Newsphoto from '../news-page-components/newsphoto.jsx'
import Footer from '../components/Footer.jsx'

export default function News() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
        <Header />
        <Newsphoto />
        <NewsMain />
        <Footer />
    </div>
  )
}
