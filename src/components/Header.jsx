import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect } from 'react';

function Header() {
    const [language, setLanguage] = useState('ru');
    const [isOpen, setOpen] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleLanguage = () => {
        setLanguage(language === 'ru' ? 'en' : 'ru');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Убираем слушатель события при размонтировании компонента
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className="Header min-w-full max-h-16 z-1 shadow-2xl font-semibold p-3 items-center text-blue-900">
            <div className="logo ml-10 flex">
                <div className="logo-image w-12 h-12 mr-4"></div>
                <a href="/" className="inline-block w-[200px] text-center align-middle py-2">37-Школа им. Пушкина</a>
            </div>

            <div className="main-header-navbar flex sm:items-center">
                <Link to="/" className="hover:text-blue-700 duration-200 mr-6 mb-2 sm:mb-0">Главная</Link>
                <Link to="/news" className="hover:text-blue-700 duration-200 mr-4 mb-2 sm:mb-0">Новости</Link>
                <Link to="/aboutus" className="hover:text-blue-700 duration-200 mb-2 sm:mb-0">O школе</Link>
            </div>

            <div className="language mr-10 mt-2 sm:mt-0">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" value="" type="checkbox" />
                    <div className="peer rounded-md outline-none duration-100 after:duration-500 w-20 h-8 bg-blue-900 peer-focus:outline-none peer-focus:ring-blue-500  after:content-['eng'] after:absolute after:outline-none after:rounded-sm after:h-6 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-10 peer-checked:after:content-['rus'] peer-checked:after:border-white">
                    </div>
                </label>
            </div>

            {windowWidth < 756 && (
                <div className={`burgerMenu ${isOpen ? "active":""}`} onClick={() => setOpen(!isOpen)}>
                    <span className="stick"></span><span className="stick"></span><span className="stick"></span>
                </div>
            )}

            {windowWidth < 756 && (
                <div className={`off-screen-menu ${isOpen ? "active" : ""}`} >
                    <Link to='/'>Главное</Link>
                    <Link to='/news'>Новости</Link>
                    <Link to='/aboutus'>О Нас</Link>
                </div>
            )}

            {/* <div className="burger-menu sm:hidden">
                <label>
                    <div
                        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                        onClick={toggleMenu}
                    >
                        <input className="hidden peer" type="checkbox" />
                        <div
                            className={`w-[50%] h-[2px] bg-blue-900 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${isMenuOpen ? 'rotate-[-45deg]' : ''}`}
                        ></div>
                        <div
                            className={`w-[50%] h-[2px] bg-blue-900 rounded-md transition-all duration-300 origin-center ${isMenuOpen ? 'hidden' : ''}`}
                        ></div>
                        <div
                            className={`w-[50%] h-[2px] bg-blue-900 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${isMenuOpen ? 'rotate-[45deg]' : ''}`}
                        ></div>
                    </div>
                </label>
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4">
                        <Link to="/" className="block py-2 px-4 text-blue-900 hover:bg-blue-100 mb-2">Главная</Link>
                        <Link to="/news" className="block py-2 px-4 text-blue-900 hover:bg-blue-100 mb-2">Новости</Link>
                        <Link to="/aboutus" className="block py-2 px-4 text-blue-900 hover:bg-blue-100">O школе</Link>
                    </div>
                </div>
            )} */}
        </div>
    );
}

export default Header;
