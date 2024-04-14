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
        <div className="Header z-1 shadow-2xl font-semibold flex flex-col sm:flex-row lg:h-auto justify-between p-3 items-center text-blue-900">
            <div className="logo ml-10 flex">
                <img src="./logo.png" className='w-6' alt="" />
                <a href="/">37-Школа им. Пушкина</a>
            </div>

            <div className="main-header-navbar flex sm:flex-row flex-col sm:items-center">
                <Link to='/' className='hover:text-blue-700 duration-200 mr-6 mb-2 sm:mb-0'>Главная</Link>
                <Link to='/news' className='hover:text-blue-700 duration-200 mr-4 mb-2 sm:mb-0'>Новости</Link>
                <Link to='/aboutus' className='hover:text-blue-700 duration-200 mb-2 sm:mb-0'>O школе</Link>
            </div>

            <div className="language mr-10 mt-2 sm:mt-0">
                {/* Используем состояние языка для отображения текущего выбранного языка */}
                <label class="relative inline-flex items-center cursor-pointer">
                    <input class="sr-only peer" value="" type="checkbox"/>
                    <div class="peer rounded-md outline-none duration-100 after:duration-500 w-20 h-8 bg-blue-900 peer-focus:outline-none peer-focus:ring-blue-500  after:content-['eng'] after:absolute after:outline-none after:rounded-sm after:h-6 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-10 peer-checked:after:content-['rus'] peer-checked:after:border-white">
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Header;
