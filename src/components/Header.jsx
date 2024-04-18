import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Header() {
    const [language, setLanguage] = useState('ru'); // Состояние для отслеживания текущего выбранного языка

    // Функция для переключения языка
    const toggleLanguage = () => {
        setLanguage(language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className="Header min-w-full min-h-16 z-1 shadow-2xl font-semibold  p-3 items-center text-blue-900">
            <div className="logo ml-10 flex">
                <div className="logo-image w-12 h-12 mr-4"></div>
                <a href="/" className='inline-block align-middle py-2'>37-Школа им. Пушкина</a>

            </div>

            <div className="main-header-navbar flex  sm:items-center">
                <Link to='/' className='hover:text-blue-700 duration-200 mr-6 mb-2 sm:mb-0'>Главная</Link>
                <Link to='/news' className='hover:text-blue-700 duration-200 mr-4 mb-2 sm:mb-0'>Новости</Link>
                <Link to='/aboutus' className='hover:text-blue-700 duration-200 mb-2 sm:mb-0'>O школе</Link>
            </div>

            <div className="language mr-10 mt-2 sm:mt-0">
                {/* Используем состояние языка для отображения текущего выбранного языка */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" value="" type="checkbox"/>
                    <div className="peer rounded-md outline-none duration-100 after:duration-500 w-20 h-8 bg-blue-900 peer-focus:outline-none peer-focus:ring-blue-500  after:content-['eng'] after:absolute after:outline-none after:rounded-sm after:h-6 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-10 peer-checked:after:content-['rus'] peer-checked:after:border-white">
                    </div>
                </label>
            </div>

            <div className='burger-menu hidden'>
                <label>
                    <div
                        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                    >
                        <input className="hidden peer" type="checkbox" />
                        <div
                        className="w-[50%] h-[2px] bg-blue-900 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                        ></div>
                        <div
                        className="w-[50%] h-[2px] bg-blue-900 rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                        ></div>
                        <div
                        className="w-[50%] h-[2px] bg-blue-900 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                        ></div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Header;