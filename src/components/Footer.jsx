import React from "react";
import footerLogo from './images/footer-logo.png'; // импортируем изображение
import './Footer.css'
import { Link } from "react-router-dom";
import instagramLogo from './images/instagram.png';
import telegramLogo from './images/telegram.png';
import facebookLogo from './images/facebook.png'

function Footer() {
    return(
        <footer className="footer bg-blue-900">
            <div className="up-containers">
                <div className="first-container">
                    
                    <div className="imgbox mt-10">
                        <img src={footerLogo} alt="" className="block m-auto" />
                        <p className="font-regular text-white text-xl mt-2">37-школа города Нукус имени А.С.Пушкина</p>
                    </div>

                    <div className="navbar mt-12">
                        <Link to='news'>Новости</Link>
                        <Link to='teachers'>Учителя</Link>
                        <Link to='aboutus'>О школе</Link>
                        <Link to='adminpage'>Админка</Link>
                    </div>
                </div>

                <div className="second-container">
                    
                        <img src={facebookLogo} alt="" />
                        <img src={instagramLogo} alt="" />
                        <img src={telegramLogo} alt="" />
                </div>
            </div>

            <div className="down-container">
                <p className="text-gray-400 ml-2">Copyright All Rights Reserved</p>
                <h2 className="font-bold mr-2 text-white">Developed by JumisApp</h2>
            </div>
        </footer>
    );
}

export default Footer;
