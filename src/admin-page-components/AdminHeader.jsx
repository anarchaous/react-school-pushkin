import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-screen h-20 border-b-2 border-blue-900 flex items-center justify-between'>
      <h1 className='text-3xl ml-4 text-blue-900 font-bold'>Admin</h1>
      <div onClick={toggleMenu} className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
        <input id="menu-toggle" className="hidden peer" type="checkbox" />
        <div className={`w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${isMenuOpen ? 'peer-checked rotate-[-45deg]' : ''}`}></div>
        <div className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center ${isMenuOpen ? 'peer-checked hidden' : ''}`}></div>
        <div className={`w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${isMenuOpen ? 'peer-checked rotate-[45deg]' : ''}`}></div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 font-semibold z-10 right-0 bg-white border border-gray-300 flex flex-col p-2">
          <Link className='' to="/adminpage/add-staff">Добавить Учителя</Link>
          <Link to='/adminpage/add-news'>Добавить Новость</Link>
          <Link to='teachers'>Учителя</Link>
          <Link>Ученики</Link>
          <Link>Классы</Link>
          <Link>Документы</Link>
          <Link>Меню</Link>
          <Link>Страница</Link>
          {/* Add more menu items as needed */}
        </div>
      )}
    </div>
  );
}
