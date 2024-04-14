import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    slide: true,
    fade: false,
    cssEase: 'linear',
    variableWidth: true, // Динамическая ширина слайдов
    centerMode: true 
  }

  return (
    <div className='min-w-screen min-h-screen flex flex-col items-center overflow-x-hidden'>

      <div className="header h-32 p-4 flex items-center flex-col">
        <h1 className='font-bold text-4xl'>Новости</h1>
        <h2 className='font-semibold text-md mt-4 text-gray-700'>Последние новости школы</h2>
      </div>

      
      <div className="main max-w-full h-96 p-4 flex items-center ml-4">
          <Slider {...settings} className='w-[100%]  h-96 p-4 flex justify-center'>
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/>  
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/>  
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
            <News_card img="https://img.freepik.com/premium-photo/cute-pupils-writing-at-desk-in-classroom_13339-86067.jpg" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cupiditate quas quibusdam totam quasi, ex blanditiis minima similique enim labore officia alias "/> 
          </Slider>
      </div>

      <div className="button mt-16 hover:bg-blue-800 duration-200">
        <Link to='/' className='bg-blue-900 p-4 text-white font-bold rounded-md hover:bg-blue-800 duration-200'>Больше новостей</Link>
      </div>

    </div>
  )
}
