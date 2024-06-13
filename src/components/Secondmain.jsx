import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/Secondmain.css"
import axios from 'axios'
import { useLayoutEffect, useRef } from 'react'

function Card(props) {
  return (
    <Link to='teachers' className="cardd flex flex-col items-center card duration-200 hover:cursor-pointer border-2 border-blue-800 p-2 rounded-md">
      <h1 className='font-bold text-xl'>{props.name}</h1>
      {/* <div className="logo w-full h-full bg-cover bg-center rounded-md overflow-hidden"> */}
        <img src={props.image} className='w-full h-full object-cover' alt="img" />
    </Link>
  );
}

export default function Secondmain() {

  const secondmainRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.context(() => {
  //     gsap.from('.second-navbar-button', {opacity: 0, y: -100, 
  //       scrollTrigger: {
  //         trigger: '.first-cards',
  //         markers: true
  //       }
  //     })
  //   }, secondmainRef)
  // }, [])

  useLayoutEffect(()=> {
    
    gsap.from('.cardd', {opacity: 0, y: 100, duration: 1, 
            scrollTrigger: {
              trigger: '.navbar',
              start: 'top center',
              end: 'bottom 10%',
              markers: false
            }
          })

    gsap.from('.navbar', {opacity: 0, x: 100, duration: 1,
            scrollTrigger: {
              trigger: '.cardd',
              markers: false
            }
    })
  }, [])

  return (
    <div ref={secondmainRef} className='min-w-screen min-h-screen  flex flex-col items-center'>
      <div className="header w-full h-24 flex items-center py-6 px-20">
        <div className="navbar w-full font-bold text-gray-600 flex justify-between" style={{ marginRight: '20px' }}>
          <Link className='second-navbar-button lg:text-xl hover:text-gray-800 duration-200'>Руководство</Link>
          <Link className='second-navbar-button lg:text-xl hover:text-gray-800 duration-200'>Ученики</Link>
          <Link className='second-navbar-button lg:text-xl hover:text-gray-800 duration-200'>Новости</Link>
          <Link className='second-navbar-button lg:text-xl hover:text-gray-800 duration-200'>История школы</Link>
          <Link className='second-navbar-button lg:text-xl hover:text-gray-800 duration-200'>Открытые уроки</Link>
        </div>
      </div>

      <div className="first-cards mt-[-150px] flex-grow min-w-full flex items-center justify-center">
        <div className="cards w-full h-full flex gap-4 p-6 flex-wrap justify-center">
          {/* Содержимое карточек */}
          <Card name="Директор" image="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"/>
          <Card name="Зам.Директора" image="https://static.vecteezy.com/system/resources/previews/011/634/397/non_2x/man-coder-development-programming-computer-free-vector.jpg"/>
          <Card name="Учителя" image="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1711584000&semt=sph"/>
          {/* <Card name="Ученики" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY2EMipkbZAmBXzELnPKdzRHqZtZ9lzVd2us2cTblhg&s"/> */}
        </div>
      </div>
    </div>
  )
}
