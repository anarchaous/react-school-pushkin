import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <div className='w-60 min-h-screen border-r-2 border-gray-500'>
        <div className="logo w-60 bg-blue-600 h-20"></div>

        <div className="nav w-60  flex flex-col gap-y-10 font-bold text-1.6xl text-gray-700 items-center">
            <Link className='mt-10'>Пользователи</Link>
            <Link>Новости</Link>
            <Link>Объявления</Link>
            <Link>Контакты</Link>
            <Link>Классы</Link>
            <Link>Документы</Link>
            <Link>Меню</Link>
            <Link>Страница</Link>
        </div>
    </div>
  )
}
