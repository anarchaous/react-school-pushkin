import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import './styles/Schoolnews.css';
import { marker } from 'leaflet';

function NewsCard({ img, text, title }) {
  return (
    <div className="max-w-lg mx-auto">
      <div className="news-card-tr bg-white school-news-card  rounded-lg h-[450px] overflow-hidden shadow-lg border-2 mr-2">
        <img className="w-full h-64 object-cover object-center" src={img} alt="News" />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{text.substring(0, 100)}...</p>
          <div className="mt-4">
            <Link to="/" className="text-blue-500 font-semibold hover:text-blue-700">Читать далее</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Schoolnews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://pushkin-production.up.railway.app/api/news')
      .then(response => {
        setData(response.data);
        console.log(response.data)
        
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          fade: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
        }
      },
    ]
  };

  useLayoutEffect(() => {
    gsap.from('.news-title', {opacity: 0, duration: 1,
      scrollTrigger: {
        trigger: '.about-us-btn',
        markers: false,
        start: 'top center'
      }
    })

    gsap.from('.news-last-title', {opacity: 0, x:-100, duration: 1, delay: .2,
      scrollTrigger: {
        trigger: '.news-title',
        markers: false,
        start: 'top center'
      }
    })
  }, [])

  gsap.from('.more-news-button', {opacity: 0, y:-100, duration: 1, delay: .2,
    scrollTrigger: {
      trigger: '.news-title',
      markers: false,
      start: 'top center'
    }
  })

  

  return (
    <div className="osnova min-w-screen min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="header h-32 p-4 flex items-center flex-col">
        <h1 className="news-title font-bold text-6xl">Новости</h1>
        <h2 className="news-last-title font-semibold text-md mt-4 text-gray-700">Последние новости школы</h2>
      </div>

      {data.length > 0 ? ( // Проверка, что данные загружены
        <div className="main w-full h-96 p-4 ml-4">
          <div className="slider-container mb-8">
            <Slider {...settings} className="slider">
            {data.map(news => (
  <NewsCard key={news.id} img={news.images && news.images.length > 0 ? news.images[0].path : ''} title={news.title} text={news.text} />
))}

            </Slider>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Выводим "Loading..." пока данные загружаются
      )}

      <div className="more-news-button mt-32 hover:bg-blue-800 duration-200">
        <Link to="/news" className="bg-blue-900 p-6 text-white font-bold rounded-md hover:bg-blue-800 duration-200">Больше новостей</Link>
      </div>

    </div>
  );
}
