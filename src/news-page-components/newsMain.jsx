import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './news-page-styles/newsmain.css'
import NewsCard from './news-page-styles/NewsCard';
import './news-page-styles/NewsCard.css'
// function NewsCard(props) {
//   return (
//     <div className="newscard p-2 mb-10 rounded-sm mt-8 w-[70%] h-[500px] flex flex-col justify-between">
//       <div className="header flex justify-between">
//         <h1 className='ml-3 mt-3 font-bold text-xl'>{props.title}</h1>
//         <span className='bg-gray-300 date p-3'>{props.date}</span>
//       </div>

//       <div className="ml-3 main">
//         <p className='text-sm mb-4'>{props.text}</p>
//       </div>

//       <div className="ml-3 images w-[97%] h-80 mb-4 flex text-2xl text-gray-700 font-bold">
//         {props.images.map((image, index) => (
//           <img 
//             key={index} 
//             src={image.path} 
//             className='bg-gray-300 w-[100%] h-[100%] object-cover mr-2 flex justify-center items-center' 
//             alt="" 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



export default function NewsMain(props) {
  const [categoryID, setCategoryID] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    axios.get('https://pushkin-production.up.railway.app/api/news')
      .then(response => {
        console.log(response.data);
        console.log(response) // Вывод данных в консоль
        setData(response.data);
        setLoading(false); // Установка данных в состояние
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);
  

  return (
    <div className='flex items-center justify-center flex-col min-w-screen min-h-screen'>
      <div className="header-nav w-full flex justify-center items-center p-2">
        <div className="navbar text-gray-600 font-semibold">
          <Link onClick={() => setCategoryID(1)} className='mr-20 hover:text-gray-700 duration-200'>Последние</Link>
          <Link onClick={() => setCategoryID(2)} className='mr-20 hover:text-gray-700 duration-200'>Спортивные</Link>
          <Link onClick={() => setCategoryID(3)} className='mr-20 hover:text-gray-700 duration-200'>Учебные достижения</Link>
          <Link onClick={() => setCategoryID(4)} className='mr-20 hover:text-gray-700 duration-200'>События и мероприятия</Link>
        </div>
      </div>

      <h1 className='novosti mt-6 text-blue-900 font-bold text-2xl'>Новости</h1>
      <div className="news-container w-full flex justify-center flex-col items-center">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        data.map(news => (news.news_category_id == categoryID )  ? (
          <NewsCard
            key={news.id}
            id={news.id}
            date={news.date}
            title={news.title}
            text={news.text}
            image={news.images} // Заменяем 'image' на 'images'
          />
        ) : null)
      )}

      {console.log(categoryID)}
      </div>
    </div>
  );
}
