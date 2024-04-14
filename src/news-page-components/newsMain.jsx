import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ type }) {
  // Пример данных новости
  const newsData = {
    latest: {
      title: 'Заголовок последних новостей',
      date: '20/12/2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    sports: {
      title: 'Заголовок спортивных новостей',
      date: '20/12/2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    achievements: {
      title: 'Заголовок учебных достижений',
      date: '20/12/2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    events: {
      title: 'Заголовок событий и мероприятий',
      date: '20/12/2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  };

  const { title, date, content } = newsData[type];

  return (
    <div className="newscard mb-10 rounded-sm mt-8 w-[70%] h-[500px] flex flex-col justify-between">
      <div className="header flex justify-between">
        <h1 className='ml-3 mt-3 font-bold text-xl'>{title}</h1>
        <span className='bg-gray-300 p-3'>{date}</span>
      </div>

      <div className="ml-3 main">
        <p className='text-sm'>{content}</p>
      </div>

      <div className="ml-3 images  w-[97%] h-80 mb-4 flex text-2xl text-gray-700 font-bold">
        <div className='bg-gray-300 w-[33%] h-[100%] mr-2 flex justify-center items-center'>IMG</div>
        <div className='bg-gray-300 w-[33%] h-[100%] mr-2 flex justify-center items-center'>IMG</div>
        <div className='bg-gray-300 w-[33%] h-[100%] mr-2 flex justify-center items-center'>IMG</div>
      </div>
    </div>
  );
}

export default function NewsMain() {
  const [newsType, setNewsType] = useState('latest'); // Используем latest как значение по умолчанию

  // Обработчик события для изменения типа новостей
  const handleNewsTypeChange = (type) => {
    setNewsType(type);
  };

  return (
    <div className='flex items-center justify-center flex-col min-w-screen min-h-screen'>
      <div className="header w-full h-20 flex justify-center items-center p-2">
        <div className="navbar text-gray-600 font-semibold">
          {/* Используем обработчики событий для изменения типа новостей */}
          <Link onClick={() => handleNewsTypeChange('latest')} className='mr-20 hover:text-gray-700 duration-200'>Последние</Link>
          <Link onClick={() => handleNewsTypeChange('sports')} className='mr-20 hover:text-gray-700 duration-200'>Спортивные</Link>
          <Link onClick={() => handleNewsTypeChange('achievements')} className='mr-20 hover:text-gray-700 duration-200'>Учебные достижения</Link>
          <Link onClick={() => handleNewsTypeChange('events')} className='mr-20 hover:text-gray-700 duration-200'>События и мероприятия</Link>
        </div>
      </div>

      <h1 className='mt-10 text-blue-900 font-bold text-2xl'>Новости</h1>

      {/* Лента новостей */}
      <div className="news-container w-full flex justify-center flex-col items-center">
        <NewsCard type={newsType} />
        <NewsCard type={newsType} />
        <NewsCard type={newsType} />
        <NewsCard type={newsType} />
      </div>
    </div>
  );
}
