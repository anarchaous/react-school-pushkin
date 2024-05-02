import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <div className='w-60 min-h-screen border-r-2 border-gray-500'>
        <div className="logo w-60 border-b-2 border-blue-900 h-20" style={{background: 'url(./adminphoto.png)'}}></div>

        <div className="nav w-60  flex flex-col gap-y-10 font-bold text-1.6xl text-gray-700 items-center">
            <Link className='mt-10' to="/adminpage/add-staff">Добавить Учителя</Link>
            <Link to='/adminpage/add-news'>Добавить Новость</Link>
            <Link to='teachers'>Учителя</Link>
            <Link>Ученики</Link>
            <Link to='classlist'>Классы</Link>
            <Link to='news'>Новости</Link>
            <Link>Меню</Link>
            <Link>Страница</Link>
        </div>
    </div>
  )
}
