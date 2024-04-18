import React, { useEffect } from 'react'
import AdminSidebar from '../admin-page-components/AdminSidebar'
import AdminHeader from '../admin-page-components/AdminHeader'
import AdminAddStaff from '../admin-page-components/AdminAddStaff'

export default function Adminpage() {
  return (
    <div className='flex overflow-hidden'>
        <AdminSidebar />
        <div className='flex flex-col min-w-full min-h-screen'>
          <AdminHeader />
          <AdminAddStaff />
        </div>
    </div>
  )
}
