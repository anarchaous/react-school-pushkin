import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aboutschool.css';
import group_nine from './images/group9.png'
import { useLayoutEffect } from 'react';

export default function Aboutschool() {

  useLayoutEffect(() => {
    gsap.from('.about-title', {opacity: 0, y: -100, duration: 1,
      scrollTrigger: {
        trigger: '.about-title',
        markers: false,
        start: "top center",
        end: 'bottom 40%'
      }
    })

    gsap.from('.school-logo-circle', {x:-100, opacity: 0, duration: 1, delay: .3,
      scrollTrigger: {
        trigger: '.about-title',
        markers: false,
        start: 'top center',
        end: 'bottom 40%'
      }
    }) 

    gsap.from('.p-container', {x:100, opacity: 0, duration: 1, delay: .6,
      scrollTrigger: {
        trigger: '.about-title',
        markers: false,
        end: 'bottom 40%',
        start: 'top center'
      }
    }) 
  }, [])

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center ">
      <h1 className='title about-title font-bold lg:text-6xl sm:text-4xl text-blue-900 mt-6'>О нашей школе</h1>

      <div className="first-container  flex w-full mt-20 justify-center items-center">

        {/* <div className="school-logo-circle w-[450px] h-[450px] mr-12 rounded-full"></div> */}
        <img className='school-logo-circle w-[450px] h-[450px] mr-12 rounded-full' src={group_nine} alt="" />

        <div className="p-container  flex flex-col">
          <p className='max-w-[400px] text-lg font-semibold'>
              В нашей школе мы стремимся к обеспечению качественного образования каждому ученику. Мы верим, что образование - это не только учебные программы и уроки, но и процесс формирования личности, развития навыков и поиска своего места в мире. Наш подход основан на индивидуальном подходе к каждому ученику, позволяющему раскрыть его потенциал. Мы предлагаем обширную программу, включающую в себя как академические предметы, так и внеурочные занятия, способствующие развитию творческого мышления и социальных навыков. Наша цель - вдохновить учеников на учебу, помочь им обрести знания и навыки, которые пригодятся им в будущем жизни и карьере. Вместе мы создаем образовательную среду, где каждый ученик может процветать и достигать своих целей.
          </p>
          <Link to="/aboutus" className='about-us-btn bg-blue-900 p-6 w-60 text-center rounded-xl text-white font-semibold hover:bg-blue-800 duration-200 mt-4'>Хочу узнать больше!</Link> {/* Добавлены классы sm:mt-0 */}
        </div>
      </div>
    </div>
  );
}

// <div className='min-w-screen min-h-screen flex items-center flex-col py-6'>
    //   <h1 className='font-bold text-4xl'>О нашей школе</h1>

    //   <div className="first-container container flex mt-8 h-[500px] w-[900px] items-center flex-col sm:flex-row"> {/* Изменено направление flex на flex-col sm:flex-row */}
    //     <div className="second-container flex flex-col ml-8 mt-4 sm:mt-0 sm:flex-grow"> {/* Добавлены классы sm:mt-0 sm:flex-grow */}
    //       <div className="school-logo-circle mr-6 w-96 h-96 rounded-full sm:mr-0 sm:mb-6"> {/* Добавлены классы sm:mr-0 sm:mb-6 */}
    //         {/* <img src="group9.png" alt="9999" className="w-full h-full object-cover" /> */}
    //       </div>
    //       <p className='max-w-[400px] font-regular'>
    //         В нашей школе мы стремимся к обеспечению качественного образования каждому ученику. Мы верим, что образование - это не только учебные программы и уроки, но и процесс формирования личности, развития навыков и поиска своего места в мире. Наш подход основан на индивидуальном подходе к каждому ученику, позволяющему раскрыть его потенциал. Мы предлагаем обширную программу, включающую в себя как академические предметы, так и внеурочные занятия, способствующие развитию творческого мышления и социальных навыков. Наша цель - вдохновить учеников на учебу, помочь им обрести знания и навыки, которые пригодятся им в будущем жизни и карьере. Вместе мы создаем образовательную среду, где каждый ученик может процветать и достигать своих целей.
    //       </p>
    //     </div>
    //     <Link to="/" className='bg-blue-900 p-4 w-60 text-center rounded-xl text-white font-semibold hover:bg-blue-800 duration-200 mt-4 sm:mt-0'>Хочу узнать больше!</Link> {/* Добавлены классы sm:mt-0 */}
    //   </div>
    // </div>
