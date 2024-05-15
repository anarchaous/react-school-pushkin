import React, { useEffect, useState } from 'react'
import AdminSidebar from '../admin-page-components/AdminSidebar'
import AdminHeader from '../admin-page-components/AdminHeader'
import { Outlet, useNavigate } from 'react-router-dom'
import './AdminLayout.css'

export default function AdminLayout() {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'pushkin37' && password === '14881488') {
      setIsLoggedIn(true);
      navigate('/adminpage/add-staff');
    } else {
      alert('Неправильное имя пользователя или пароль');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className='adminlayout flex overflow-hidden'>
        <div className="container flex flex-col">
          <form onSubmit={handleSubmit}>
            <label>
              Имя пользователя:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Пароль:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className='adminlayout flex overflow-hidden'>
      {windowWidth > 756 && <AdminSidebar />}
      <div className="container flex flex-col">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
}
