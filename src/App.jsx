import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { Route, Link, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import News from './pages/News.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Teachers from './pages/Teachers.jsx'
import Adminpage from './pages/Admin-page.jsx'
import AdminAddNews from './admin-pages/AdminAddNews.jsx'
import AdminTeacherList from './admin-pages/AdminTeachersList.jsx'
import NotFound from './pages/NotFound.jsx'
import AdminLayout from './admin-pages/AdminLayout.jsx'
import AdminClassList from './admin-pages/AdminClassList.jsx'
import Testpage from './pages/Testpage.jsx'
import AdminNews from './admin-page-components/AdminNews.jsx'
import NewsDetail from './pages/NewsDetail.jsx'

function App() {
  return (
    <div className='App min-w-screen min-h-screen'>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/teachers" element={<Teachers />}/>
        <Route path='/adminpage' element={<AdminLayout />}>
          <Route path="add-staff" element={<Adminpage />}/>
          <Route path="add-news" element={<AdminAddNews />}/>
          <Route path="teachers" element={<AdminTeacherList />}/>
          <Route path="classlist" element={<AdminClassList />}/>
          <Route path="news" element={<AdminNews />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
        <Route path='/testpage' element={<Testpage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  )
}

export default App;