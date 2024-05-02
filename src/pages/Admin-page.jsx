import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../admin-page-components/AdminSidebar';
import AdminHeader from '../admin-page-components/AdminHeader';
import AdminAddStaff from '../admin-page-components/AdminAddStaff';
// import AnotherComponent from '../admin-page-components/AnotherComponent';

export default function Adminpage() {
  return (
    <div className='flex overflow-hidden'>
        <AdminAddStaff />
          {/* <Route path="/adminpage/another-component" element={<AnotherComponent />} /> */}
          {/* Другие маршруты */}
    </div>
  );
}
