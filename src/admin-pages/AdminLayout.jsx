import React, { useEffect, useState } from 'react'
import AdminSidebar from '../admin-page-components/AdminSidebar'
import AdminHeader from '../admin-page-components/AdminHeader'
import { Outlet } from 'react-router-dom'
import './AdminLayout.css'

export default function AdminLayout() {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  }, [])
  
  return (
    <div className='adminlayout flex overflow-hidden'>
        {windowWidth > 756 && <AdminSidebar />}
        <div className="container flex flex-col">
            <AdminHeader />
            <Outlet />
        </div>
    </div>
  )
}
