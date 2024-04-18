import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Schoolnews.css';

function News_card(props) {
  return (
    <div className="Card bg-gray-300 max-w-80 min-h-80 rounded-lg p-2  mr-10">
      <div className="img w-full h-40 rounded-md bg-cover" style={{ backgroundImage: `url(${props.img})` }} />
      <p className='text-sm mt-4'>{props.text}</p>
      <div className="button mt-10">
        <Link to='/' className='font-bold text-blue-900'>More</Link>
      </div>
    </div>
  )
}

export default function Schoolnews() {
  // Определяем ширину экрана
  const screenWidth = window.innerWidth;

  // Определяем количество слайдов в зависимости от размера экрана
  const slidesToShow = screenWidth < 756 ? 1 : 4;

  // Определяем флаг фейда в зависимости от ширины экрана
  const fade = screenWidth < 756 ? true : false;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow, // Используем определенное количество слайдов
    slidesToScroll: 1,
    arrows: false,
    slide: true,
    fade: fade, // Используем флаг фейда
    cssEase: 'linear',
    variableWidth: false,
    centerMode: true 
  }

  return (
    <div className='osnova min-w-screen min-h-screen flex flex-col items-center overflow-x-hidden'>

      <div className="header h-32 p-4 flex items-center flex-col">
        <h1 className='font-bold text-4xl'>Новости</h1>
        <h2 className='font-semibold text-md mt-4 text-gray-700'>Последние новости школы</h2>
      </div>

      
      <div className="main max-w-full h-96 p-4 flex items-center ml-4">
          <Slider {...settings} className='slider w-[100%]  h-96 p-4 flex justify-center'>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Ученики школы провели интересный проект, посвященный истории города"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="В школе прошла встреча с известным писателем, автором популярных детских книг"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Объявлены результаты конкурса чтецов - победители получили ценные призы и награды"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Школьная команда по шахматам заняла первое место на международном турнире"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Ученики подготовили театрализованное представление по случаю Дня Победы"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="В школе открылась новая спортивная секция - занятия стартуют в следующем месяце"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Преподаватели школы получили грамоты за высокие показатели успеваемости учеников"/>
          <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Школьный хор готовится к участию в областном фестивале детского творчества"/>

          </Slider>
      </div>

      <div className="more-news-button mt-12 hover:bg-blue-800 duration-200">
        <Link to='/news' className='bg-blue-900 p-4 text-white font-bold rounded-md hover:bg-blue-800 duration-200'>Больше новостей</Link>
      </div>

    </div>
  )
}
