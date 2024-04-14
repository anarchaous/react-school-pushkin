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

function App() {
  return (
    <div className='App min-w-screen min-h-screen'>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/teachers" element={<Teachers />}/>
        <Route path="/adminpage" element={<Adminpage />}/>
      </Routes>
    </div>
  )
}

export default App;