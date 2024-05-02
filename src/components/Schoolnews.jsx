import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

function NewsCard({ img, text }) {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-500 mr-2">
        <img className="w-full h-64 object-cover object-center" src={img} alt="News" />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{text.substring(0, 30)}...</h2>
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
    axios.get('https://pushkin.onrender.com/api/news')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const settings = {
    dots: true,
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
      }
    ]
  };

  return (
    <div className="osnova min-w-screen min-h-screen flex flex-col items-center overflow-x-hidden">

      <div className="header h-32 p-4 flex items-center flex-col">
        <h1 className="font-bold text-4xl">Новости</h1>
        <h2 className="font-semibold text-md mt-4 text-gray-700">Последние новости школы</h2>
      </div>

      <div className="main w-full h-96 p-4 ml-4">
  <div className="slider-container mb-8">
    <Slider {...settings} className="slider">
      {data.map(news => (
        <NewsCard key={news.id} img={news.images[0].path} text={news.text} />
      ))}
    </Slider>
  </div>
</div>


      <div className="more-news-button mt-24 hover:bg-blue-800 duration-200">
        <Link to="/news" className="bg-blue-900 p-4 text-white font-bold rounded-md hover:bg-blue-800 duration-200">Больше новостей</Link>
      </div>

    </div>
  );
}