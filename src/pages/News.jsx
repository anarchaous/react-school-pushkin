import React from 'react'
import Header from '../components/Header.jsx'
import NewsMain from '../news-page-components/newsMain.jsx'
import Newsphoto from '../news-page-components/newsphoto.jsx'

export default function News() {
  return (
    <div>
        <Header />
        <Newsphoto />
        <NewsMain />
    </div>
  )
}
